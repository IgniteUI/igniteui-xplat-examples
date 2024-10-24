//begin template
const columnGroupStatesTreeGrid = new Map();
function toggleTreeGridColumnGroup(name) {
    const grid = document.getElementsByTagName("igc-tree-grid")[0];
    var columnGroup = grid.columns.find((col) => col.header === name)
    const columns = columnGroup.childColumns;
    if (columnGroup.header === 'General Information') {
        const col = columns[1];
        col.hidden = !col.hidden;
    } else if (columnGroup.header === 'Address Information') {
        for (const col of columns) {
            col.hidden = !col.hidden;
        }
    }
    columnGroupStatesTreeGrid.set(name, !columnGroupStatesTreeGrid.get(name));
}
igRegisterScript("WebTreeGridColumnGroupHeaderTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var iconName = columnGroupStatesTreeGrid.get(ctx.column.header) ? '🔽' : '🔼';
    return html`<div>
    <span draggable="false" onclick='toggleTreeGridColumnGroup("${ctx.column.header}")'>${iconName}</span>
    <span>${ctx.column.header}</span>
</div>`;
}, false);
//end template