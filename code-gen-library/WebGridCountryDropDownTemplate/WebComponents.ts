//begin imports
import { IgcCellTemplateContext, IgcRenderFunction } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridCountryDropDownTemplate {
//begin template
//begin content
public webGridCountryDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
    if (!ctx || !ctx.cell) {
        return nothing;
    }

    const id = ctx.cell.id.rowID;
    const comboId = "country_" + id;

    return html`
        <igc-combo
            id="${comboId}"
            placeholder="Choose Country..." 
            value-key="Country" 
            display-key="Country" 
            single-select
            .data="${CodeGenHelper.findByName<any[]>("countries")}"
            @igcChange="${(e: CustomEvent) => (this as any).onCountryChange(id, e)}"
        ></igc-combo> 
    `;
}
//end content
//end template
}

