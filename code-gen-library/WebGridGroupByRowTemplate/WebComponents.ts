//begin imports
import { IgcGridComponent, IgcGroupByRecord, IgcGroupByRowTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridGroupByRowTemplate {
    //begin template
    //begin content
    public webGridGroupByRowTemplate = (ctx: IgcGroupByRowTemplateContext) => {

        const groupRow: IgcGroupByRecord = ctx.implicit;
        const values = groupRow.records;

        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        var calc2017 = values.filter((x) => new Date(x.OrderDate) >= startDate && new Date(x.OrderDate) <= endDate).length;

        return html`<div>
<span style="color:#09f;">${groupRow.expression.fieldName} :</span>
<span>${groupRow.value}</span>
<igc-badge>${groupRow.records.length}</igc-badge>
<span style="color:#09f;"> Ordered in 2017:</span><span>${calc2017}</span>
</div>`;

    };
    //end content
    //end template
}