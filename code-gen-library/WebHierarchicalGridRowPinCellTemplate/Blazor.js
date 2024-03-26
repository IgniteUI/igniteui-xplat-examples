//begin template
igRegisterScript("WebHierarchicalGridRowPinCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.toggleRowPin = function toggleRowPin(row) {
        row.pinned = !row.pinned;
    }
	const row = ctx.cell.row;
    return html`<div>
    <span onpointerdown='toggleRowPin("${row}")'>📌</span>
</div>`;
}, false);
//end template