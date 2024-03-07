//begin template
const columnGroupStates = new Map();
function toggleColumnGroup(name) {
    const grid = document.getElementsByTagName("igc-grid")[0];
    var columnGroup = grid.columns.find((col) => col.header === name)
    const columns = columnGroup.children.toArray();
    if (columnGroup.header === 'General Information') {
        const column = columns[1];
        column.hidden = !column.hidden;
    } else if (columnGroup.header === 'Address Information') {
        for (const column of columns) {
            const col = column;
            if (col.header === "Location"){
                for (const cl of col.columnChildren) {
                    const c = cl;
                    if (c.field !== "Address"){
                        c.hidden = !c.hidden;
                    }
                }
            }
            else if (col.header === "Contact Information"){
                const c = col.columnChildren[1];
                c.hidden = !c.hidden;
            }
        }
    } else {
        for (let i = 1; i < columns.length; i++) {
            const c = columns[i];
            c.hidden = !c.hidden;
        }
    }
    columnGroupStates.set(name, !columnGroupStates.get(name));
}
igRegisterScript("WebGridColumnGroupHeaderTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var iconName = columnGroupStates.get(ctx.column.header) ? '🔽' : '🔼';
    return html`<div>
    <span draggable="false" onclick='toggleColumnGroup("${ctx.column.header}")'>${iconName}</span>
    <span>${ctx.column.header}</span>
</div>`;
}, false);
//end template