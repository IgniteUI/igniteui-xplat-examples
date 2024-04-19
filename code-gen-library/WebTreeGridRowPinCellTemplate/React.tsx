//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebTreeGridRowPinCellTemplate {
//begin template
//begin content
public webTreeGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    const index = e.dataContext.cell.row.index;
    return (
        <span onPointerDown={(e: any) => this.toggleRowPin(index)} style={{ cursor: 'pointer'}}>📌</span>
    );
}
//end content
//begin supportingMethods
public toggleRowPin(index: number) {
    this.treeGrid.getRowByIndex(index).pinned = !this.treeGrid.getRowByIndex(index).pinned;
}
//end supportingMethods
//end template
}

