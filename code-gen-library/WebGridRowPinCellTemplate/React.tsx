//begin imports
import { IgrCellTemplateContext, IgrGrid } from 'igniteui-react-grids';
//end imports

export class WebGridRowPinCellTemplate {
//begin template
//begin content
public webGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    const index = e.dataContext.cell.row.index;
    return (
        <div class='customIcon'>
        <span onPointerDown={(e: any) => this.toggleRowPin(index)} className='customIconSpan'>📌</span>
        </div>
    );
}
//end content
//begin supportingMethods
public toggleRowPin(index: number) {
    let grid = CodeGenHelper.getDescription<IgrGrid>("content");
    grid.getRowByIndex(index).pinned = !grid.getRowByIndex(index).pinned;
}
//end supportingMethods
//end template
}

