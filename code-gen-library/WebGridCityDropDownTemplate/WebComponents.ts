//begin imports
import { IgcComboComponent } from 'igniteui-webcomponents';
import { IgcCellTemplateContext, IgcRenderFunction } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridCityDropDownTemplate {
//begin template
//begin content
public webGridCityDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
    if (!ctx || !ctx.cell) {
        return nothing;
    }

    const id = ctx.cell.id.rowID;
    const comboId = "city_" + id;

    return html`
        <div style="display: flex; flex-direction: column;">
            <igc-combo 
                id="${comboId}" 
                placeholder="Choose City..." 
                value-key="Name" 
                display-key="Name" 
                single-select 
                disabled
            ></igc-combo>
        </div>
    `;
}
//end content
//end template
}

