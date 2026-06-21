//begin imports
import { IgcGridComponent, IgcHeadSelectorTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridHeaderRowSelectorExcelTemplate {
    //begin template
    //begin content
    public webGridHeaderRowSelectorExcelTemplate = (ctx: IgcHeadSelectorTemplateContext) => {
        if (ctx.implicit.selectedCount > 0 && ctx.implicit.selectedCount === ctx.implicit.totalCount) {
            return html`<span style='width: 30px;display: flex;justify-content: center;'><i style='color: rgb(239, 184, 209);width: 18px;cursor: pointer;'>◢</i></span>`;
        } else {
            return html`<span style='width: 30px;display: flex;justify-content: center;'><i style='width: 18px;cursor: pointer;'>◢</i></span>`;
        }
    };
    //end content
    //end template
}