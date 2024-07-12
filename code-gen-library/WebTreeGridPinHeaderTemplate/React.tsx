//begin imports
import { IgrTreeGridComponent, IgrColumnTemplateContext} from 'igniteui-react-grids';
//end imports

export class WebTreeGridPinHeaderTemplate {
//begin template
//begin content
public webTreeGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
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
    var treeGrid = CodeGenHelper.getDescription<IgrTreeGrid>("content");
    var col = treeGrid.getColumnByName(field);
    col.pinned = !col.pinned;
    treeGrid.markForCheck();
}
//end supportingMethods
//end template
}

