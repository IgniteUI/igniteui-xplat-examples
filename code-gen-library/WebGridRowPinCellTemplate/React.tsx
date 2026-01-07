//begin imports
import { IgrCellTemplateContext, IgrGrid } from 'igniteui-react-grids';
//end imports

export class WebGridRowPinCellTemplate {
//begin template
//begin content
public webGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    const key = e.dataContext.cell.row.key;
    return (
        <div className='customIcon'>
        <span onPointerDown={(e: any) => this.toggleRowPin(key)} className='customIconSpan'>📌</span>
        </div>
    );
}
//end content
//begin supportingMethods
public toggleRowPin(key: string) {
    let grid = CodeGenHelper.getDescription<IgrGrid>("content");
    grid.getRowByKey(key).pinned = !grid.getRowByKey(key).pinned;
}
//end supportingMethods
//end template
}

