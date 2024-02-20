//begin imports
import { IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridArtistPhotoTemplate {
//begin template
//begin content
public WebHierarchicalGridArtistPhotoTemplate = (ctx: IgcCellTemplateContext) => {
    if (ctx.cell.value) {
        return html`<img src="${ctx.cell.value}"/>`;
    }
};
//end content
//end template
}