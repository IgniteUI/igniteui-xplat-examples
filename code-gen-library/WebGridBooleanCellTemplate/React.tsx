//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridBooleanCellTemplate {
//begin template
//begin content
    public webGridBooleanCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/active.png" title="Continued" alt="Continued" />
            );
        } else {
            return (
                <img src="https://dl.infragistics.com/x/img/grid/expired.png" title="Discontinued" alt="Discontinued" />
            );
        }
    }
//end content
//end template
}

