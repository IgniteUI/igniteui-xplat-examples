# Cross-platform code generation tooling

This directory is the Node replacement for the `code-exporter-app` / `code-exporter-dev`
generation path. It uses the code-generating renderer shipped by
`igniteui-webcomponents-core@7.1.1-beta.12`; it does not reproduce product generation rules.

The package has two framework-neutral jobs:

- emit the JSON samples in `../samples` through the product renderer and repository templates;
- find `json-snippet` fences in Markdown or MDX and replace them with emitted platform code.
- emit `code-gen-library` projects through the same product renderer as LibraryProjectEmitter;
- compile generated projects and load Web Components definitions in a real Chromium renderer.

There is deliberately no Astro, navigation, frontmatter, token, or site-build logic here.

## Install and build

```sh
cd tooling
npm ci
npm run build
```

Node 24 is used in CI. Node 22 or newer is supported locally.

## Commands

Emit one sample into the Web Components downstream layout:

```sh
node src/cli.mjs export \
  --platform=WebComponents \
  --source=../samples/gauges/linear-gauge/needle.json \
  --output=/path/to/igniteui-wc-examples/samples \
  --clean
```

Validate emission for every platform (Angular, React, Web Components, Blazor, WPF, WinUI,
and Uno):

```sh
node src/cli.mjs check --source=../samples/gauges/linear-gauge/needle.json
```

Create a platform-aware manifest by comparing every emitted sample folder at the merge base and
the pull-request head:

```sh
node src/cli.mjs impact \
  --changed-since=origin/main \
  --platform=Angular,React,WebComponents,Blazor \
  --output=/tmp/output-impact.json
```

The folder mapping is exact: `samples/grids/data-grid/performance.json` owns the emitted
`grids/data-grid/performance/` folder. The manifest records separate testing and normal-emission
changes. Testing includes exclusions carrying `"test": true`; downstream synchronization uses the
normal-emission set so it never removes a platform-excluded, manually maintained folder.

Emit the complete code-generation library, or compile only changed items and their requirements:

```sh
node src/cli.mjs library --platform=WebComponents --output=/tmp/code-library --clean
node src/cli.mjs library-check --platform=React --changed-since=origin/main
```

`library-check` covers Angular, React, Web Components, Blazor, WinUI, and Uno. The web checks run a
real TypeScript compile rather than transpile-only parsing; Blazor builds the emitted Razor library
with .NET 10. Hosted WinUI and Uno lanes validate native source/project emission, while their actual
compilation runs in the private Windows tier described below. Full-library manual runs currently
expose existing source debt, so the required PR lane checks changed items while retaining a manual
`--all` audit.

`library` also emits WinUI and Uno projects from the same npm product renderer. Their project files
reference the native product source tree, so the manual Windows tier writes them into the checked-out
private `dev-tools` layout and performs real .NET builds there. This ports the provider/template work
that currently exists only on the `gmurray/winui` dev-tools branch without making public hosted jobs
pretend those private assemblies are available.

Emit and compile sample projects. Shards deterministically divide the complete set for CI without
changing what is covered:

```sh
node src/cli.mjs sample-build --platform=Angular --impact-manifest=/tmp/output-impact.json
node src/cli.mjs sample-build --platform=Blazor --source=../samples/gauges/linear-gauge/needle.json
node src/cli.mjs sample-build --platform=WebComponents --shard-index=0 --shard-total=12
```

For local diagnostics, pass `--output` with a fresh scratch directory to preserve existing generated
projects and failure evidence:

```sh
node src/cli.mjs sample-build --platform=Angular --source=../samples/charts/data-chart/overview.json --output=/tmp/xplat-angular-overview
```

Platform exclusion rules control downstream emission. An exclusion may set `"test": true` to keep
that sample in the platform's validation and compile lanes without exporting it downstream. DataGrid
uses this opt-in for Angular, React, Web Components, and Blazor. `check` and `sample-build` also accept
`--include-excluded` for an explicit full audit; `export` always honors emission exclusions.

Hosted CI covers Angular, React, Web Components, and Blazor builds. The Web Components runtime
harness lives in `runtime/`:

```sh
cd runtime
npm ci
npx playwright install chromium
node run.mjs --samples --filter=gauges/linear-gauge
```

Uno source emission deliberately uses the WinUI-compatible renderer output but not its project
files. Downstream sync overlays that XAML/C# into a genuine `Uno.Sdk` shell cloned from
`Infragistics/uno-samples`; the manual self-hosted job is the supported Uno compile path.

Expand every JSON snippet in a Markdown tree. Output retains the input paths below one directory
per platform:

```sh
node src/cli.mjs snippets \
  --source=/path/to/topics \
  --output=/tmp/emitted-topics
```

Use `--platform=Angular,React` to select platforms. Fence attributes supported by the
documentation work—`id`, `ref`, `channel`, `item`, `include`, `omit`, `exclude`, `code`, and
`source`—are handled by the copied fence emitter.

## Pull-request automation

`.github/workflows/codegen-validation.yml` makes full-repository product emission an unconditional
PR check for all seven platforms. The browser runtime check also loads the complete supported sample
set on every PR. `.github/workflows/emitted-sample-builds.yml` compares base and head output, divides
only changed sample/platform folders into 12 shards, and performs real project builds for Angular,
React, Web Components, and Blazor. Stable aggregate jobs (`Code generation passed`, `Emitted sample
builds passed`, and `Emitted libraries passed`) are the checks intended for repository rulesets.

`.github/workflows/sync-downstream-prs.yml` creates or refreshes ten downstream PRs:
four web repositories, each targeting both `vnext` (staging) and `master` (production), plus
`Infragistics/winui-samples` and `Infragistics/uno-samples`, whose current downstream base is `main`.
For an upstream branch named `feature/foo`, the downstream branches are:

- `feature/foo--vnext`
- `feature/foo--master`

The suffixed web branches are necessary because the two downstream bases can contain different
packages and sample structure. Both receive only folders identified by the upstream base-versus-head
output manifest, applied to their own base on every upstream update, so
they can be reviewed and merged independently without leaking `vnext` commits into `master`.
The native peers use `<upstream-branch>--main`. Uno keeps its native Uno project shell and receives
only the Uno-targeted XAML/C# emitted by the product renderer.

Repository setup required:

1. Register and install the downstream sync GitHub App, then provision its App ID and private
   key by following the [downstream sync App runbook](../.github/DOWNSTREAM_SYNC_APP.md).
2. Create the `downstream-sync` GitHub Actions environment and choose protection rules compatible
   with whether every upstream PR update should synchronize automatically.
3. Require `Code generation passed`, `Emitted sample builds passed`, `Emitted libraries passed`, and
   the Web Components runtime `load` job in the repository ruleset.

Fork pull requests run validation but do not receive the App private key and therefore do not create
downstream branches.

Additional workflows compile emitted web/Blazor libraries and load the complete supported Web
Components sample set in Chromium on every PR. Canonical `Web*` grid cases are currently an opt-in
diagnostic tier (`--include-web-grids`); DataGrid and every canonical type without the `Web` prefix
remain required. Exact known failures in the pinned beta are recorded in
`runtime/known-issues.json` and can be re-audited with `--include-known-issues`. A manual self-hosted
Windows tier checks out
private `dev-tools` and compiles emitted WinUI and Uno libraries and samples against freshly built
product assemblies. The Uno sample job checks its desktop head inside the genuine `uno-samples`
project shell. Its default native-library smoke includes data and an event handler; the
`full_library` dispatch option audits every available item. GTK builds remain gated by a suitable
runner and product prerequisites; they are not reported as passing merely because related code can
be emitted.
