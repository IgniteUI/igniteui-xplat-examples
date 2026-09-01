# Emitted sample runtime check

This is the framework-neutral `--samples` half of the documentation snippet runtime harness. It
loads source JSON samples with the published Web Components renderer in Chromium and waits for the
renderer to become idle, flush, and settle animations. Browser exceptions, renderer errors,
unresolved enums, sequence-only failures, and optionally blank output are reported.

```sh
npm ci
npx playwright install chromium
node run.mjs --samples
node run.mjs --samples --filter=maps/geo-map
node run.mjs --samples --changed-since=origin/main
node run.mjs --samples --limit=20 --headed
node run.mjs --samples --include-unsupported # diagnostic audit beyond the supported export contract
node run.mjs --samples --include-excluded    # test all WC platform exclusions
node run.mjs --samples --include-known-issues # re-audit quarantined failures in the pinned beta
node run.mjs --samples --include-web-grids    # opt into canonical Web* grid definitions
```

The normal samples run covers every definition exported to Web Components and honors the repository's
canonical platform exclusions. It reports how many deliberately unsupported or `export: false`
definitions were skipped; `--include-unsupported` opts into those product-development cases.
Exclusion rules carrying `"test": true` remain in the runtime suite even though downstream emission
skips them; `--include-excluded` audits every platform exclusion. Exact
failures accepted temporarily for the pinned beta live in `known-issues.json`, with reasons, so the
required check remains sensitive to every new regression. Canonical `Web*` grid definitions are an
opt-in diagnostic tier for now and are reported as not checked by the required run; their package is
exactly pinned and registered through `defineAllComponents()`, and their generated projects remain
covered by emission and compile checks. DataGrid and all canonical types without the `Web` prefix are
part of the required browser baseline.

Samples whose `onViewInit` deliberately starts work that never completes list those exact handler
names in `"testingSkippedViewInits"`. Runtime testing removes only those named initialisers from the
JSON before loading it; the rest of the sample still renders and must settle normally. The harness
does not cancel timers during teardown or otherwise make a sample appear settled.

Use `--skip-browser-install` after Chromium has already been installed. `generated/`,
`blank-shots/`, and `node_modules/` are disposable and ignored.

This runtime is Web Components-specific because it exercises the live browser renderer. Angular,
React, and Blazor are covered by emitted-project compilation instead. Desktop/mobile runtime checks
belong on the self-hosted product runner where their SDKs and private `dev-tools` assemblies exist.
