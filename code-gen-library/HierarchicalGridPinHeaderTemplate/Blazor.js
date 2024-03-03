//begin template
igRegisterScript("HierarchicalGridPinHeaderTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.toggleColumnPin = function toggleColumnPin(field) {
        if(field) {
            field.pinned = !field.pinned;
            grid.markForCheck();
        }
    }
    return html`<div>
    <span style="float:left">${ctx.column.field}</span>
    <span style="float:right" onpointerdown='toggleColumnPin("${ctx.column}")'>📌</span>
</div>`;
}, false);
//end template