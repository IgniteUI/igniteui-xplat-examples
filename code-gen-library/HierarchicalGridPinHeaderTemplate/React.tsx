//begin imports
import { IgrColumnTemplateContext, IgrColumn } from 'igniteui-react-grids';
//end imports


export class HierarchicalGridPinHeaderTemplate {
    //begin template
    //begin content
    public hierarchicalGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div style={{display: 'flex'}}>
                <span>{column.field}</span>
                <span style={{marginLeft: 'auto'}} onClick={(e: any) => this.toggleColumnPin(column)}>📌</span>
            </div>
        );
    }
    //end content
    //begin supportingMethods
    public toggleColumnPin(field: IgrColumn) {
        if(field) {
            field.pinned = !field.pinned;
        }
    }
    //end supportingMethods
    //end template
}