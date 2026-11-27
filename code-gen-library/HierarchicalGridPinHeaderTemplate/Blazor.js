//begin template
registerScript("HierarchicalGridPinHeaderTemplate", (ctx) => {
    window.toggleColumnPin = function toggleColumnPin(column) {
            column.pinned = !column.pinned;
    }
    return html`<div style="display:flex;">
    <span>${ctx.column.field}</span>
    <span style="margin-left: auto; cursor: pointer;" @click=${() => toggleColumnPin(ctx.column)}>📌</span>
</div>`;
});
//end template