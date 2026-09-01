/**
 * The description set, found the way this build can find it.
 *
 * The only part of the emitter API that differs between here and the spike in dev-tools, and the
 * reason there were two copies of a 750-line file. Here the descriptions come from the published
 * package's export surface; there they come from the locally built TypeScript, which vite globs.
 * Everything else — snippet-api.ts — is authored once, in this repository, and the spike builds
 * that same file.
 */

import * as core from "igniteui-webcomponents-core";

/** Every description module, whose register() puts a type's metadata into a renderer's context. */
export function descriptionModules(): any[] {
    const modules: any[] = [];
    for (const [name, exported] of Object.entries(core as Record<string, any>)) {
        if (!name.endsWith("DescriptionModule")) continue;
        if (exported && typeof exported.register === "function") modules.push(exported);
    }
    return modules;
}

/**
 * Every description type's marker, which is what the schema is generated from.
 *
 * Taken from the export surface rather than listed, because the set grows with the product and a
 * schema missing a type would report the sample using it as invalid.
 */
export function descriptionTypeMarkers(): any[] {
    const types: any[] = [];
    for (const [name, exported] of Object.entries(core as Record<string, any>)) {
        if (!name.endsWith("Description")) continue;
        const marker = exported && exported.$t;
        if (marker !== undefined && marker !== null) types.push(marker);
    }
    return types;
}
