//begin imports
import { IgrColumnTemplateContext, IgrColumn } from 'igniteui-react-grids';
//end imports


export class WebTreeGridSummariesHeaderTemplate {
    //begin template
    //begin content
    public webTreeGridSummariesHeaderTemplate = (props: { dataContext: IgrColumnTemplateContext }) => {
        const column = (props.dataContext as any).column;
        return (
            <div>
                <span style={{ float: 'left' }}>{column.field}</span>
                <span style={{ float: 'right', color: column.hasSummary ? '#e41c77' : '' }} onPointerDown={(e: any) => this.toggleSummary(column)}>∑</span>
            </div>
        );
    }
    //end content
    //begin supportingMethods
    public toggleSummary(field: IgrColumn) {
        if (field) {
            field.hasSummary = !field.hasSummary;
            this.setState({ summary: field.hasSummary });
        }
    }
    //end supportingMethods
    //end template
}