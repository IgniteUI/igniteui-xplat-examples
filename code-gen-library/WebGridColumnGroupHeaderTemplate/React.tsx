//begin imports
import { IgrColumn, IgrGrid, IgrColumnGroup, IgrColumnTemplateContext } from 'igniteui-react-grids';
//end imports
export class WebGridColumnGroupHeaderTemplate {
//begin template
//begin content
public webGridColumnGroupHeaderTemplate = (e: { dataContext: IgrColumnTemplateContext }) => {
    const column = e.dataContext.column;
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span draggable="false"  onClick={(e: any) => this.toggleColumnGroup(column)}>
                {this.columnGroupStates.get(column) ? "🔽" : "🔼"}
            </span>
            <span>{column.header}</span>
        </div>
    );
};
//end content
//begin supportingMethods
public columnGroupStates = new Map<IgrColumn, boolean>();
public toggleColumnGroup(column: IgrColumn) {
    let grid = CodeGenHelper.getDescription<IgrGrid>("grid");
    const columnGroup = grid.contentColumns.find((col) => col.name == column.name) as IgrColumnGroup;
    const columns = Array.from(columnGroup.actualChildren);
    if (columnGroup.header === 'General Information') {
        const col = columns[1] as IgrColumn;
        col.hidden = !col.hidden;
    } else if (columnGroup.header === 'Address Information') {
        for (const col of columns) {
            const c = col as IgrColumn;
            c.hidden = !c.hidden;
        }
    }
    columnGroup.forceUpdate();
    this.columnGroupStates.set(column, !this.columnGroupStates.get(column));
}
//end supportingMethods
//end template
}