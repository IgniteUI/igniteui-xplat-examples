//begin template
registerScript("WebHierarchicalGridRowPinCellTemplate", (ctx) => {
    window.toggleRowPin = function toggleRowPin(row) {
        row.pinned = !row.pinned;
    }
	const row = ctx.cell.row;
    return html`<div>
    <span @pointerdown=${() => toggleRowPin(row)}>📌</span>
</div>`;
});
//end template