//begin imports
import { IgrCellTemplateContext, IgrGrid } from 'igniteui-react-grids';
//end imports

export class WebGridRowPinCellTemplate {
//begin template
//begin content
public webGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    const grid = CodeGenHelper.getDescription<IgrGrid>("content");
    const index = e.dataContext.cell.row.index;
    const row = grid.rowList.toArray().find(x => x.index === index);
    if (row && row.pinned && row.disabled) {
        return ();
    }
    return (
        <div className='customIcon'>
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

