//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebTreeGridProductNameTemplate {
//begin template
//begin content
public webTreeGridProductNameTemplate = (ctx: IgcCellTemplateContext) => {
    let value = ctx.cell.value;

    if (value == "Grandmas Boysenberry Spread" || value == "Mishi Kobe Niku" || value == "Carnarvon Tigers" || value == "Ikura") {
        return html`<span style="color: royalblue">${value}</span>`;
    }
    else {
        return html`<span>${value}</span>`;
    }
};   
//end content
//end template
}