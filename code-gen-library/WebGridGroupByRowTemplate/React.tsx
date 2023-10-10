//begin imports
import { IgrGroupByRowTemplateContext } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';
//end imports

export class WebGridGroupByRowTemplate {
    //begin template
    //begin content
    public webGridGroupByRowTemplate = (e: {dataContext: IgrGroupByRowTemplateContext}) => {

        const groupRow: any = e.dataContext.implicit;
        const values = groupRow.records;

        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        const calc2017 = values.filter((x: any) => new Date(x.OrderDate) >= startDate && new Date(x.OrderDate) <= endDate).length;
        const spanStyle = {
            color: '#09f'
          };
        return <><div>
            <span style={spanStyle}>{groupRow.expression.fieldName} :</span>
            <span>${groupRow.value}</span>
            <IgrBadge><span key="content">{groupRow.records.length}</span></IgrBadge>
            <span style={spanStyle}> Ordered in 2017:</span><span>${calc2017}</span>
        </div>
        </>;
    };
    //end content
    //end template
}