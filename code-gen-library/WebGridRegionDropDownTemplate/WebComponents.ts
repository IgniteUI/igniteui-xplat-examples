//begin imports
import { IgcComboComponent } from 'igniteui-webcomponents';
import { IgcCellTemplateContext, IgcRenderFunction } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridRegionDropDownTemplate {
//begin template
//begin content
public webGridRegionDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
    if (!ctx || !ctx.cell) {
        return nothing;
    }

    const id = ctx.cell.id.rowID;
    const comboId = "region_" + id;

    return html`
        <div style="display: flex; flex-direction: column;">
            <igc-combo 
                id="${comboId}" 
                placeholder="Choose Region..." 
                value-key="Region" 
                display-key="Region" 
                single-select 
                disabled
                @igcChange="${(e: CustomEvent) => (this as any).onRegionChange(id, e)}"
            ></igc-combo>
        </div>
    `;
}
//end content
//end template
}

