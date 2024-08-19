//begin imports
import { IgrColumn, IgrColumnGroup, IgrColumnTemplateContext, IgrHierarchicalGrid } from 'igniteui-react-grids';
//end imports
export class WebHierarchicalGridColumnGroupHeaderTemplate {
//begin template
//begin content
public webHierarchicalGridColumnGroupHeaderTemplate = (e: { dataContext: IgrColumnTemplateContext }) => {
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
public toggleColumnGroup(columnGroup: IgrColumn) {
    const columns = columnGroup.childColumns;
    if (columnGroup.header === 'General Information') {
        const column = columns[1] as IgrColumn;
        column.hidden = !column.hidden;
    } else if (columnGroup.header === 'Address Information') {
        for (const column of columns) {
            const col = column as IgrColumn;
            if (col.header === "Location"){
                for (const cl of col.childColumns) {
                    const c = cl as IgrColumn;
                    if (c.field !== "Address"){
                        c.hidden = !c.hidden;
                    }
                }
            }
            else if (col.header === "Contact Information"){
                const c = col.childColumns[1] as IgrColumn;
                c.hidden = !c.hidden;
            }
        }
    } else {
        for (let i = 1; i < columns.length; i++) {
            const c = columns[i] as IgrColumn;
            c.hidden = !c.hidden;
        }
    }
    columnGroup.forceUpdate();
    this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
}
//end supportingMethods
//end template
}