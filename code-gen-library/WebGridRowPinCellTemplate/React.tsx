//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridRowPinCellTemplate {
//begin template
//begin content
public webGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    const index = e.dataContext.cell.row.index;
    return (
        <span onPointerDown={(e: any) => this.toggleRowPin(index)} style={{ cursor: 'pointer'}}>📌</span>
    );
}
//end content
//begin supportingMethods
public toggleRowPin(index: number) {
    this.grid.getRowByIndex(index).pinned = !this.grid.getRowByIndex(index).pinned;
}
//end supportingMethods
//end template
}

