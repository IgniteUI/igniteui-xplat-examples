/**
 * Just enough PNG to answer one question: did anything get drawn?
 *
 * Written rather than installed, because the answer needed is a count of pixels that are not white and
 * every image library is a dependency, a build step and a licence to think about. Handles what chromium
 * produces for a screenshot: eight bits a channel, RGB or RGBA, no interlacing.
 */

import zlib from 'zlib';

/** The fraction of pixels that are not the background, between 0 and 1. */
export function fractionNotWhite(png, { tolerance = 6 } = {}) {
    const { width, height, channels, pixels } = decode(png);
    let different = 0;
    const limit = 255 - tolerance;
    for (let i = 0; i < pixels.length; i += channels) {
        // A transparent pixel is the plate showing through, not something drawn.
        if (channels === 4 && pixels[i + 3] < 16) continue;
        if (pixels[i] < limit || pixels[i + 1] < limit || pixels[i + 2] < limit) different++;
    }
    return { fraction: different / (width * height), width, height, drawn: different };
}

function decode(png) {
    if (png.length < 8 || png.readUInt32BE(0) !== 0x89504e47) {
        throw new Error('not a PNG');
    }
    let at = 8;
    let width = 0, height = 0, depth = 0, colourType = 0, interlace = 0;
    const data = [];
    while (at < png.length) {
        const length = png.readUInt32BE(at);
        const type = png.toString('ascii', at + 4, at + 8);
        const body = png.subarray(at + 8, at + 8 + length);
        if (type === 'IHDR') {
            width = body.readUInt32BE(0);
            height = body.readUInt32BE(4);
            depth = body[8];
            colourType = body[9];
            interlace = body[12];
        } else if (type === 'IDAT') {
            data.push(body);
        } else if (type === 'IEND') {
            break;
        }
        at += 12 + length;
    }
    if (depth !== 8 || interlace !== 0 || (colourType !== 2 && colourType !== 6)) {
        throw new Error(`unsupported PNG: depth ${depth}, colour type ${colourType}, interlace ${interlace}`);
    }
    const channels = colourType === 6 ? 4 : 3;
    const raw = zlib.inflateSync(Buffer.concat(data));
    const stride = width * channels;
    const pixels = Buffer.alloc(stride * height);

    // Each scanline is filtered against the one above it; undoing that is the whole of decoding here.
    for (let y = 0; y < height; y++) {
        const filter = raw[y * (stride + 1)];
        const line = raw.subarray(y * (stride + 1) + 1, y * (stride + 1) + 1 + stride);
        const out = pixels.subarray(y * stride, (y + 1) * stride);
        const above = y > 0 ? pixels.subarray((y - 1) * stride, y * stride) : null;
        for (let x = 0; x < stride; x++) {
            const left = x >= channels ? out[x - channels] : 0;
            const up = above ? above[x] : 0;
            const upLeft = above && x >= channels ? above[x - channels] : 0;
            let value = line[x];
            switch (filter) {
                case 0: break;
                case 1: value += left; break;
                case 2: value += up; break;
                case 3: value += (left + up) >> 1; break;
                case 4: value += paeth(left, up, upLeft); break;
                default: throw new Error(`unknown PNG filter ${filter}`);
            }
            out[x] = value & 0xff;
        }
    }
    return { width, height, channels, pixels };
}

function paeth(a, b, c) {
    const p = a + b - c;
    const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}
