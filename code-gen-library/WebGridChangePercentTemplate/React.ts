//begin imports
import { IgrBadgeComponent } from "igniteui-react";
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridChangePercentTemplate {
//begin template
//begin content
    public webGridChangePercentTemplate = (props: { dataContext: IgrCellTemplateContext }) => {
        if (props.dataContext.cell.value > 0) {
            return (
                <div>
                <span style={{ color: 'green' }}> { props.dataContext.cell.value.toFixed(2) }%</span>
                </div>
            );
        } else {
            return (
                <div>
                <span style={{ color: 'red' }}>{ props.dataContext.cell.value.toFixed(2) }%</span>
                </div>
            );
        }
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
.grid__wrapper {
  padding: 16px;
}
<!--end styles-->
`;
//end template
}
