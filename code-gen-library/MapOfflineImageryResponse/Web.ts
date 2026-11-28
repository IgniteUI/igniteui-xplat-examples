//begin imports
import { IgcGeographicMapImagery, IgcImageryRequestEventArgs } from "igniteui-webcomponents-maps";
//end imports

export class MapOfflineImageryResponse {
    //begin eventHandler
public mapOfflineImageryResponse(sender: IgcGeographicMapImagery, args: IgcImageryRequestEventArgs): void {
    switch (args.requestType) {
        case "BingMetadata": args.responseContent = "{\"resourceSets\":[{\"resources\":[{\"imageUrl\":\"https://tiles.invalid/bing/{quadkey}.png\",\"imageUrlSubdomains\":[\"t0\"],\"zoomMin\":0,\"zoomMax\":23,\"imageryProviders\":[]}]}]}"; return;
        case "ArcGISToken": args.responseContent = "{\"token\":\"offline-token\",\"expires\":4102444800000}"; return;
        case "ArcGISMapServer": args.responseContent = "{\"tileInfo\":{\"lods\":[{\"level\":0},{\"level\":1},{\"level\":2},{\"level\":3},{\"level\":4},{\"level\":5},{\"level\":6},{\"level\":7},{\"level\":8},{\"level\":9},{\"level\":10},{\"level\":11},{\"level\":12},{\"level\":13},{\"level\":14},{\"level\":15},{\"level\":16},{\"level\":17},{\"level\":18},{\"level\":19},{\"level\":20},{\"level\":21},{\"level\":22},{\"level\":23}]}}"; return;
        case "Tile": break;
        default: return;
    }
    const zoom = args.tileLevel - 8, x = args.tilePositionX, y = args.tilePositionY;
    const image = new Uint8Array(54 + 256 * 256 * 3);
    const header = new DataView(image.buffer);
    image[0] = 66; image[1] = 77;
    header.setUint32(2, image.length, true);
    header.setUint32(10, 54, true); header.setUint32(14, 40, true);
    header.setInt32(18, 256, true); header.setInt32(22, 256, true);
    image[26] = 1; image[28] = 24;
    header.setUint32(34, image.length - 54, true);
    for (let row = 0; row < 256; row++) {
        for (let col = 0; col < 256; col++) {
            const offset = 54 + (row * 256 + col) * 3;
            const border = row < 2 || col < 2 || row >= 254 || col >= 254;
            image[offset] = border ? 48 : 216 + (x & 3) * 8;
            image[offset + 1] = border ? 48 : 216 + (y & 3) * 8;
            image[offset + 2] = border ? 48 : 216 + (zoom & 3) * 8;
        }
    }
    const font = "111101101101111010110010010111111001111100111111001111001111101101111001001111100111001111111100111101111111001001001001111101111101111111101111001111111001010100111101101010101101101101010010010000000111000000000111000111000", characters = "0123456789ZXY-=";
    const labels = ["Z=" + zoom, "X=" + x, "Y=" + y];
    for (let label = 0; label < labels.length; label++) {
        const text = labels[label], top = 32 + label * 64;
        for (let index = 0; index < text.length; index++) {
            const glyph = characters.indexOf(text[index]);
            if (glyph < 0) continue;
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 3; col++) {
                    if (font[glyph * 15 + row * 3 + col] !== '1') continue;
                    for (let dy = 0; dy < 4; dy++) {
                        for (let dx = 0; dx < 4; dx++) {
                            const px = 16 + index * 16 + col * 4 + dx, py = top + row * 4 + dy;
                            if (px >= 254) continue;
                            const offset = 54 + ((255 - py) * 256 + px) * 3;
                            image[offset] = 32; image[offset + 1] = 32; image[offset + 2] = 32;
                        }
                    }
                }
            }
        }
    }
    let binary = "";
    for (let offset = 0; offset < image.length; offset += 32768) {
        binary += String.fromCharCode.apply(null, Array.from(image.subarray(offset, offset + 32768)));
    }
    args.responseContent = "data:image/bmp;base64," + btoa(binary);
}
    //end eventHandler
}
