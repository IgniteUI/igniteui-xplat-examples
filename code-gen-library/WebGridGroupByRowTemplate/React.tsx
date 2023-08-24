//begin imports
import { IgcGroupByRowTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridGroupByRowTemplate {
    //begin template
    //begin content
    public webGridGroupByRowTemplate = (ctx: IgcGroupByRowTemplateContext) => {

        const groupRow: any = ctx["$implicit"];
        const values = groupRow.records;

        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        var calc2017 = values.filter((x) => new Date(x.OrderDate) >= startDate && new Date(x.OrderDate) <= endDate).length;

        return <><div>
            <span style="color:#09f;">${groupRow.expression.fieldName} :</span>
            <span>${groupRow.value}</span>
            <igc-badge>${groupRow.records.length}</igc-badge>
            <span style="color:#09f;"> Ordered in 2017:</span><span>${calc2017}</span>
        </div>
        </>;

    };
    //end content
    //end template
}