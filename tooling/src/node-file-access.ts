/*
 * Node implementation of ICodeGenerationLibraryFileAccess.
 *
 * The product exposes the interface and keeps all of the loading behaviour — file
 * categorization, library item partitioning, region extraction — on its side. This
 * supplies only the file system, so nothing in the product references node.
 *
 * Mirrors System.IO semantics as the .NET implementation uses them:
 *   - GetFiles / GetDirectories return FULL paths of the immediate children only
 *   - FileExists / DirectoryExists are false rather than throwing for a bad path
 */

import * as fs from "node:fs";
import * as path from "node:path";

import { ICodeGenerationLibraryFileAccess } from "igniteui-webcomponents-core";

export class NodeCodeGenerationLibraryFileAccess implements ICodeGenerationLibraryFileAccess {
    fileExists(p: string): boolean {
        try {
            return fs.statSync(p).isFile();
        } catch {
            return false;
        }
    }

    directoryExists(p: string): boolean {
        try {
            return fs.statSync(p).isDirectory();
        } catch {
            return false;
        }
    }

    readAllText(p: string): string {
        // The .NET side reads UTF-8 and strips any BOM; match that so region markers at
        // the very start of a file still match.
        const text = fs.readFileSync(p, "utf8");
        return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
    }

    getFiles(p: string): string[] {
        try {
            return fs
                .readdirSync(p, { withFileTypes: true })
                .filter(e => e.isFile())
                .map(e => path.join(p, e.name));
        } catch {
            return [];
        }
    }

    getDirectories(p: string): string[] {
        try {
            return fs
                .readdirSync(p, { withFileTypes: true })
                .filter(e => e.isDirectory())
                .map(e => path.join(p, e.name));
        } catch {
            return [];
        }
    }

    getFullPath(p: string): string {
        // Path.GetFullPath equivalent: resolve against the working directory.
        return path.resolve(p);
    }
}
