//begin imports
import { IgcComboComponent } from 'igniteui-webcomponents';
import { IgcCellTemplateContext, IgcRenderFunction } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridCityDropDownTemplate {
//begin template
//begin content
public webGridCityDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
    const id = ctx.cell.id.rowID;
    const comboId = "city_" + id;
    const progressId = "progress_city_" + id;
    return html`<div style="display:flex; flex-direction: column;"><igc-combo placeholder="Choose City..." disabled value-key="Name"  display-key="Name" id="${comboId}" single-select></igc-combo><igc-linear-progress style="display:none;" indeterminate id="${progressId}"></<igc-linear-progress></div>`;
}
//end content
//end template
}

