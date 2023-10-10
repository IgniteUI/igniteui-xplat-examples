//begin imports
import { IgcComboComponent } from 'igniteui-webcomponents';
import { IgcCellTemplateContext, IgcRenderFunction } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridRegionDropDownTemplate {
//begin template
//begin content
public webGridRegionDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
    const id = ctx.cell.id.rowID;
    const comboId = "region_" + id;
    const progressId = "progress_region_" + id;
    return html`<div style="display:flex; flex-direction: column;"><igc-combo placeholder="Choose Region..." disabled value-key="Region"  display-key="Region" id="${comboId}" single-select></igc-combo><igc-linear-progress style="display:none;" indeterminate id="${progressId}"></<igc-linear-progress><div>`;
}

//end content
//end template
}

