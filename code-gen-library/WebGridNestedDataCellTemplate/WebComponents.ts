//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridNestedDataCellTemplate {
//begin template
//begin content
public webGridNestedDataCellTemplate = (ctx: IgcCellTemplateContext) => {
    if (ctx.cell.value != null) {
        if (ctx.cell.value.length === 0) return html``;
        return html`
    <igc-expansion-panel>
        <div slot="title" style="font-size: 1.1em; font-weight: bold; margin-top: 1rem; margin-bottom: 0.25rem;">
        ${ctx.cell.value[0].Name}
        </div>
        <div class="description">
            <igc-input label='Title' type="text" name="title" value="${ctx.cell.value[0].Title}" style="text-overflow: ellipsis;"></igc-input>
            <igc-input label="Age" type="text" name="title" value="${ctx.cell.value[0].Age}" style="text-overflow: ellipsis;"></igc-input>
        </div>
    </igc-expansion-panel>
        `;
    }
    return nothing;
};
//end content
//end template
}