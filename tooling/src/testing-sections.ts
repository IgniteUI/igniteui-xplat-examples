/** Resolve code-item conditions before older published emitters see the source. */
export function resolveTestingSections(source: string, isTesting = false): string {
    if (!/(?:begin|end) (?:testing|notTesting)/.test(source)) return source;
    const output: string[] = [];
    const stack: { name: string; parent: boolean }[] = [];
    let enabled = true;
    for (const [index, line] of source.replace(/\r\n/g, "\n").split("\n").entries()) {
        const text = line.trim();
        const marker = text.startsWith("//") ? text.slice(2).trim()
            : text.startsWith("<!--") && text.endsWith("-->") ? text.slice(4, -3).trim() : "";
        const match = /^(begin|end) (testing|notTesting)$/.exec(marker);
        if (match) {
            const [, action, name] = match;
            if (action === "begin") {
                stack.push({ name, parent: enabled });
                enabled = enabled && ((name === "testing") === isTesting);
            } else {
                const open = stack.pop();
                if (!open || open.name !== name) throw new Error(`Mismatched ${name} section at line ${index + 1}`);
                enabled = open.parent;
            }
            continue;
        }
        if (enabled) {
            const previous = output.at(-1)?.trimEnd() ?? "";
            if (text === ";" && /[)\]]$/.test(previous)) output[output.length - 1] = previous + ";";
            else output.push(line);
        }
    }
    if (stack.length) throw new Error(`Unclosed ${stack.at(-1)!.name} section`);
    return output.join("\n");
}

export function resolveTestingSectionsInFile(source: string, fileName: string, isTesting = false): string {
    if (!/(?:begin|end) (?:testing|notTesting)/.test(source)) return source;
    if (!fileName.toLowerCase().endsWith(".json")) return resolveTestingSections(source, isTesting);
    let content: unknown;
    try { content = JSON.parse(source); } catch { return source; }
    if (!content || typeof content !== "object" || Array.isArray(content)) return source;
    const values = content as Record<string, unknown>;
    for (const key of Object.keys(values)) {
        if (typeof values[key] === "string") values[key] = resolveTestingSections(values[key] as string, isTesting);
    }
    return JSON.stringify(content);
}
