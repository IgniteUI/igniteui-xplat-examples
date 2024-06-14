//begin imports
import { IgrGrid, IgrColumnTemplateContext} from 'igniteui-react-grids';
//end imports

export class WebGridPinHeaderTemplateComponent {
//begin template
//begin content
public webGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
    const column = (props.dataContext as any).column;
    return (
        <div>
            <span style={{float: 'left'}}>{column.field}</span>
            <span style={{float: 'right'}} onPointerDown={(e: any) => this.toggleColumnPin(column.field)}>📌</span>
        </div>
    );
}
//end content
//begin supportingMethods
public toggleColumnPin(field: string) {
    var grid = CodeGenHelper.getDescription<IgrGrid>("content");
    var col = grid.getColumnByName(field);
    col.pinned = !col.pinned;
    grid.markForCheck();
}
//end supportingMethods
//end template
}

