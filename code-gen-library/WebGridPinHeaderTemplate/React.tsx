//begin imports
import { IgrGrid, IgrColumnTemplateContext} from 'igniteui-react-grids';
//end imports

export class WebGridPinHeaderTemplateComponent {
//begin template
//begin content
public webGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
    const column = (props.dataContext as any).column;
    return (
        <div style={{display: 'flex'}}>
            <span>{column.field}</span>
            <span style={{marginLeft: 'auto'}} onPointerDown={(e: any) => this.toggleColumnPin(column.field)}>📌</span>
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

