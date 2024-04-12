//begin imports
import { IgrCellTemplateContext, IgrRowType } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridRowPinCellTemplate {
//begin template
//begin content
public webHierarchicalGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    const row = e.dataContext.cell.row;
    return (
        <span onPointerDown={(e: any) => this.toggleRowPin(row)} style={{ cursor: 'pointer'}}>📌</span>
    );
}
//end content
//begin supportingMethods
public toggleRowPin(row: IgrRowType) {
    row.pinned = !row.pinned;
}
//end supportingMethods
//end template
}

