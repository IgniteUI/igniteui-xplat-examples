//begin imports
import { IgrBadgeComponent } from "igniteui-react";
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridCurrencyCellTemplate {
//begin template
//begin content
    public webGridCurrencyCellTemplate = (props: { dataContext: IgrCellTemplateContext }) => {
        if (props.dataContext.cell.value > 0) {
            return (
                <div className="currency-badge-container">
                <IgrBadge variant="success" className="badge-left"><span>▲</span></IgrBadge>
                <span className="up">{ props.dataContext.cell.value.toFixed(2) }</span>
                </div>
            );
        } else {
            return (
                <div className="currency-badge-container">
                <IgrBadge variant="danger" className="badge-left"><span>▼</span></IgrBadge>
                <span className="down">{ props.dataContext.cell.value.toFixed(2) }</span>
                </div>
            );
        }
    }
//end content

    public requiredStyles = `
<!--begin styles-->
.up {
    color: green;
}
.down {
    color: red;
}
.currency-badge-container {
    width: 80px;
    float: right;
}
.badge-left {
    float: left;
}
<!--end styles-->
`;
//end template
}
