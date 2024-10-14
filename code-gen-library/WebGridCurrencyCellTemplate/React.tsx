//begin imports
import { IgrBadgeComponent } from "igniteui-react";
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridCurrencyCellTemplate {
//begin template
//begin content
    public webGridCurrencyCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (typeof cell.value === 'number' && cell.value > 0) {
            return(
            <div style={{width: '80px', float: 'right'}}>
                <IgrBadge variant="success" style={{float: 'left'}}><span>▲</span></IgrBadge>
                <span style={{color:'green',float: 'right'}}>${cell.value.toFixed(2)}</span>
            </div>
            );
        } else if (typeof cell.value === 'number' && cell.value <= 0) {
            return(
            <div style={{width: '80px', float: 'right'}}>
                <IgrBadge variant="danger" style={{float: 'left'}}><span>▼</span></IgrBadge>
                <span style={{color:'red',float: 'right'}}>${cell.value.toFixed(2)}</span>
            </div>
            );
        } else {
            return (
                <div style={{width: '80px', float: 'right'}}>
                    <span>${cell.value}</span>
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
