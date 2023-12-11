//begin imports
import { IgrBadgeComponent } from "igniteui-react";
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridChangePercentTemplate {
//begin template
//begin content
    public webGridChangePercentTemplate = (props: { dataContext: IgrCellTemplateContext }) => {
        const valueColor = props.dataContext.cell.value > 0 ? 'up' : 'down';
        return (
            <div className="cellAlignStyle">
            <span className={valueColor}> { props.dataContext.cell.value.toFixed(2) }%</span>
            </div>
        );
        
    }
//end content

    public requiredStyles = `
<!--begin styles-->
.cellAlignStyle {
    text-align: right;
    float:right;
}
.cellAlignStyle > span {
    float:right;
}
.up {
    color: green;
}
.down {
    color: red;
}
<!--end styles-->
`;
//end template
}
