import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const required = name => process.env[name] || (() => { throw new Error(`${name} is required`); })();
const repository = required('DOWNSTREAM_REPOSITORY');
const platform = required('PLATFORM');
const upstreamBranch = required('UPSTREAM_BRANCH');
const baseSha = required('UPSTREAM_BASE_SHA');
const upstreamPr = process.env.UPSTREAM_PR;
const bases = required('DOWNSTREAM_BASES').split(',').map(one => one.trim()).filter(Boolean);

function run(command, args, cwd = ROOT, capture = false) {
    return execFileSync(command, args, { cwd, encoding: 'utf8', stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit' });
}

function capture(command, args, cwd = ROOT) {
    try { return run(command, args, cwd, true).trim(); } catch { return ''; }
}

function safeBranchName(value) {
    return value.replace(/[^A-Za-z0-9._/-]/g, '-').replace(/\.\./g, '-').replace(/\/$/, '');
}

const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'xplat-downstream-'));
const clone = path.join(workspace, repository.split('/').pop());

try {
    run('gh', ['repo', 'clone', repository, clone, '--', '--filter=blob:none']);
    for (const base of bases) {
        const peerBranch = safeBranchName(`${upstreamBranch}--${base}`);
        run('git', ['fetch', 'origin', base], clone);
        run('git', ['checkout', '-B', peerBranch, `origin/${base}`], clone);

        const exportArgs = [path.join(ROOT, 'tooling/src/cli.mjs'), 'export', `--platform=${platform}`,
            `--changed-since=${baseSha}`, `--output=${path.join(clone, 'samples')}`, '--clean'];
        if (platform === 'Uno') {
            // Uno and WinUI share generated XAML/C#, but Uno's independently buildable project shell
            // is materially different. Seed that shell from the downstream repository and overlay
            // only the product-emitted sample sources.
            const bootstrap = path.join(workspace, `uno-bootstrap-${base}`);
            fs.cpSync(path.join(clone, 'samples/gauges/linear-gauge/needle'), bootstrap,
                { recursive: true });
            exportArgs.push('--source-overlay', `--bootstrap-from=${bootstrap}`);
        }
        run('node', exportArgs, ROOT);

        run('git', ['add', '-A', 'samples'], clone);
        const changed = capture('git', ['status', '--porcelain'], clone) !== '';
        const existing = capture('gh', ['pr', 'list', '--repo', repository, '--state', 'open',
            '--head', peerBranch, '--base', base, '--json', 'number', '--jq', '.[0].number']);

        if (!changed) {
            // Move an old peer back to its base so a reverted upstream change cannot leave stale
            // generated content waiting to merge. Close its now-empty PR explicitly.
            run('git', ['push', '--force-with-lease', 'origin', `HEAD:refs/heads/${peerBranch}`], clone);
            if (existing) run('gh', ['pr', 'close', existing, '--repo', repository,
                '--comment', 'Closed automatically: the upstream PR no longer changes this target.']);
            continue;
        }

        run('git', ['-c', 'user.name=igniteui-xplat-bot', '-c', 'user.email=igniteui-xplat-bot@users.noreply.github.com',
            'commit', '-m', `Sync ${platform} samples from ${upstreamBranch}`], clone);
        run('git', ['push', '--force-with-lease', 'origin', `HEAD:refs/heads/${peerBranch}`], clone);

        const title = `[xplat] ${upstreamBranch} (${base})`;
        const body = `Generated from IgniteUI/igniteui-xplat-examples${upstreamPr ? `#${upstreamPr}` : ` branch \`${upstreamBranch}\``}.\n\nThis PR is refreshed whenever its upstream PR changes.`;
        if (existing) run('gh', ['pr', 'edit', existing, '--repo', repository, '--title', title, '--body', body]);
        else run('gh', ['pr', 'create', '--repo', repository, '--head', peerBranch, '--base', base,
            '--title', title, '--body', body]);
    }
} finally {
    fs.rmSync(workspace, { recursive: true, force: true });
}
