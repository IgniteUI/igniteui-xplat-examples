
<div style="display: flex; flex-flow: row; font-family: 'Titillium Web'">
    <img style="border-radius: 0.25rem" alt="ignite-ui" src="https://raw.githubusercontent.com/IgniteUI/igniteui-xplat-docs/vnext/doc/en/images/readme/ig-banner.png"/>
</div>

# Cross-Platform Examples for Ignite UI Components

This repository provides source code for:
- [cross-platform samples](./samples) of Ignite UI components for Angular, Blazor, React, WebComponents, and WPF platforms. Currently, we support the following components: [Category Chart](./samples/charts/category-chart), [Data Chart](./samples/charts/data-chart), [Financial Chart](./samples/charts/financial-chart), [Pie Chart](./samples/charts/pie-chart), [Radial Gauge](./samples/gauges/radial-gauge), [Data Grid](./samples/grids/grid), [Hierarchical Grid](./samples/grids/hierarchical-grid), [Pivot Grid](./samples/grids/pivot-grid), [Tree Grid](./samples/grids/tree-grid)
- [code-gen-library](./code-gen-library) with data sources and event handlers used in [cross-platform samples](./samples)
- [editor-templates](./editor-templates) are platform specific applications used for exporting [cross-platform samples](./samples)

<div style="display: flex; flex-flow: row; font-family: 'Titillium Web'">
    <!-- <div style="font-size: 2.5rem; align-self: start; justify-content: start; margin: 0px; margin-left: 0.5rem; margin-right: 0.5rem; ">Examples</div> -->
    <!-- <img height="70px" style="border-radius: 0.25rem" alt="ignite-ui" src="./browser/public/logo-ignite-ui.svg"/> -->
    <!-- <div style="font-size: 2.5rem; margin: 0px; margin-left: 0.5rem; margin-right: 0.5rem; color: white; ">for Web Components </div> -->
</div>

## Table of Contents

- [Using Cross-Platform Editor](#Using-Cross-Platform-Editor)
- [Updating Editor Templates](#Updating-Editor-Templates)

## Using Cross-Platform Editor

You can use the [Cross Platform Editor](https://infragistics.visualstudio.com/NetAdvantage/_git/ig-editor-desktop) WPF application to render and export cross-platform examples to Angular, Blazor, React, WebComponents, and WPF platforms.

### Pie Chart Example
<img style="height: 300px" src="./notes/pie-chart.png"  />

### Category Chart Example
<img style="height: 300px" src="./notes/category-chart.png"  />

### Data Chart Example
<img style="height: 300px" src="./notes/data-chart.png" />

### Financial Chart Example
<img style="height: 300px" src="./notes/financial-chart.png"  />

### Radial Gauge Example
<img style="height: 300px" src="./notes/radial-gauge.png"  />


## Updating Editor Templates

The [Editor-Templates](editor-templates) folder contains templates for converting XPLAT samples into platform specifc samples. You **must update** those templates in the following order:

1. Create AND merge a pull request with updated packages in `browser` AND `samples` folders of the following repositories:
- [igniteui-angular-examples](https://github.com/IgniteUI/igniteui-angular-examples)
- [igniteui-blazor-examples](https://github.com/IgniteUI/igniteui-blazor-examples)
- [igniteui-react-examples](https://github.com/IgniteUI/igniteui-react-examples)
- [igniteui-wc-examples](https://github.com/IgniteUI/igniteui-wc-examples)

2. Create AND merge a pull request with updated packages in the [Editor-Templates](editor-templates) folder in this repository.

Above order of creating and merging pull requests is important to avoid stale samples and prevent building issues in platform specifc sample browsers.