//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridDiscontinuedCellTemplate {
    //begin template
    //begin content
    public webGridDiscontinuedCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return <img src="https://static.infragistics.com/xplatform/images/grid/active.png" title="Continued" alt="Continued" />;
        } else {
            return <img src="https://static.infragistics.com/xplatform/images/grid/expired.png" title="Discontinued" alt="Discontinued" />;
        }
    };
    //end content
    //end template
}