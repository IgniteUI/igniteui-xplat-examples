# The code generation library

A sample is markup plus the code behind it. The markup a generator can produce from a component's
description; the code it cannot — a handler body, a data set, a cell template — so that lives here,
one folder per item, and a sample refers to it by name.

```
code-gen-library/
    MapMultipleShapesLoad/
        Web.ts               Angular, React, Web Components
        Blazor.cs            Blazor
        Desktop.cs           WPF, WinUI, Uno, WinForms, GTK
        Web-CONFIG.json      what this variant requires, and how many of it there are
        Blazor-CONFIG.json
        Desktop-CONFIG.json
```

The documentation reads the same library. A `json-snippet` fence naming `dataSourceRef`,
`cellUpdatingRef`, `onInit` or `item=` is naming an item in here, and the block the topic publishes is
that item's code emitted for the reader's platform. That is the reason a missing platform variant
matters more than it used to: a sample that has no XAML variant simply does not offer that sample,
but a *topic* whose handler has no XAML variant publishes a heading, a sentence, and no code.

> **Write every platform.** An item exists for a platform unless the feature genuinely does not exist
> there. "Only the web sample needed it" is how a topic ends up hiding a section from half its
> readers.

---

## Platform variants

The file's base name is a **moniker**, and a moniker can cover several target platforms:

| file | covers |
|---|---|
| `Web.ts` | Angular, React, Web Components |
| `AllWeb.ts` | those three and Blazor |
| `Blazor.cs` | Blazor |
| `Desktop.cs` | WPF, WinUI, Uno, WindowsForms, GTK |
| `Xaml.cs` | WPF, WinUI, Uno |
| `WPF.cs`, `WinUI.cs`, `Uno.cs` | one each, and they win over a broader moniker |
| `DotNet.cs` | every .NET target, Blazor included |
| `Swift.swift`, `Kotlin.kt` | iOS, Android |
| `All.ts` / `XPLAT.json` | everything |

The narrowest moniker that matches wins, so a `Desktop.cs` can carry the common form and a `WinUI.cs`
override just the one platform that differs. Uno additionally falls back to WinUI and then WPF.

### One file, three platforms

`Web.ts` is written once and serves Angular, React and Web Components. What makes it each platform's
is a transform the renderer applies on the way out: `IgcShapeDataSource` becomes `IgxShapeDataSource`
for Angular and `IgrShapeDataSource` for React, along with the package it is imported from. **Write it
in the Web Components spelling** and let the transform do the rest.

---

## What an item is

There are four kinds, and an item's kind comes from **what it contains** — the region it opens says
what it is, so there is nothing to declare:

| kind | becomes one by containing | reached by |
|---|---|---|
| `Data` | `//begin data`, `//begin async data`, or being a `.json` file | `dataSourceRef` |
| `Template` | `//begin template` | `cellUpdatingRef` and friends |
| `Supporting` | `//begin supportingTypes` | another item's `requires` |
| `EventHandler` | `//begin eventHandler`, and none of the above | an event ref, `onInit`, `onViewInit` |

Get this wrong and the symptom is an empty block rather than an error: an item whose supporting types
are not inside a `supportingTypes` region is read as a handler, and a topic asking it for a region
gets nothing.

### Handlers

A handler's content is written **into** the component class, so it is a body, not a file:

```csharp
//begin imports
using IgniteUI.Blazor.Controls;
//end imports

//begin eventHandler
public void MapMultipleShapesLoad()
{
    ...
}
//end eventHandler
```

`onInit` runs when the component is constructed; `onViewInit` once the view exists. **`onViewInit` is
for actions** — things the sample does — not a place to pin an object that other code needs. If a
handler needs an object, that object is a supporting item and the handler asks for it.

### Supporting items

A handler's content goes inside the component class, so a *class* it depends on has nowhere to go —
and nesting one is not available on every platform, since Swift and Kotlin do not all offer it. A
supporting item carries those declarations and is emitted as a peer of the component:

```ts
//begin supportingTypes
export class MapMultipleShapesReaders {

    //begin readPolygons
    public readPolygons(sds: IgcShapeDataSource, e: any): void { ... }
    //end readPolygons
}
//end supportingTypes
```

The handler that needs it declares that in its `-CONFIG.json`:

```json
{
    "requires": [ "MapMultipleShapesReaders" ]
}
```

and asks for it by name rather than constructing it:

```csharp
var readers = CodeGenHelper.GetSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders");
```
```ts
var readers = CodeGenHelper.getSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders");
```

Nothing news up a type it merely assumes exists. The request is what lets the renderer emit a field,
a construction statement, or a live instance, depending on what it is generating for.

### How many of it there are

The item says so, in its `-CONFIG.json`, because it is a property of the type rather than of the
place using it:

```json
{
    "lifetime": "Shared"
}
```

| lifetime | meaning |
|---|---|
| `Shared` | one, however many handlers ask. **The default** |
| `Instance` | a new one per request |

---

## Regions

`//begin name` and `//end name` mark a region. Regions are what let a topic show one method of an item
at a time — the name is addressable from a fence as a channel token:

````mdx
```json-snippet ref="shapes" source="/maps/geo-map/binding-multiple-shapes" channel="readPolygons" item="MapMultipleShapesReaders"
```
````

Some region names are structural and every emitter looks for them:

| region | holds |
|---|---|
| `imports` | the imports this item's code needs |
| `eventHandler` | the handler body |
| `supportingTypes` | a supporting item's declarations |
| `data` | a data item's content |

Any other name is yours to invent, and becomes a snippet channel by existing.

---

## Checking your work

Nothing in this repository compiles the C# variants — they are emitted as text. What does exercise
them is the documentation's checks, run against your branch of this repository:

```sh
cd ../igniteui-docs-json/docs/xplat

node scripts/check-snippet-emission.mjs --lang=en    # every fence, every platform
node scripts/check-snippet-emission.mjs --lang=jp
node scripts/generate.mjs --platform=WinUI --lang=en # the build itself

# and what it looks like, which is the part worth reading
node scripts/check-snippet-emission.mjs --lang=en --print --platform=WinUI <topic-fragment>
```

`--print` is how a platform's block gets reviewed at all when the topic is gated away from it:
emission proves the block is not empty, and only reading it tells you it is right.

**Branch names must match.** The docs repository resolves this repository at the branch with the same
name as the branch being checked, falling back to `main`. A change that spans both is made on
same-named branches in both, or the checks review your documentation against the wrong library.

---

## Further reading

| document | covers |
|---|---|
| `JSON-SNIPPETS.md` (docs repo, `docs/xplat/`) | authoring the fences that consume these items |
| `SnippetEmitterSpike/SNIPPETS.md` (dev-tools) | the marker language and the recorder behind it |
