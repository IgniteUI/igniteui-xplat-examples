//begin imports
import { IgcColumnTemplateContext, IgcColumnComponent} from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class HierarchicalGridPinHeaderTemplate {
//begin template
//begin content
public hierarchicalGridPinHeaderTemplate = (ctx: IgcColumnTemplateContext) => {

    const column = (ctx as any).column;
    return html`<div style="display:flex;">
                 <span>${column.field}</span>
                 <span style="margin-left: auto; cursor: pointer;" @click=${(e: any) => this.toggleColumnPin(column)}>📌</span>
               </div>`;
};
//end content
//begin supportingMethods
    public toggleColumnPin(field: IgcColumnComponent) {
        if(field) {
          field.pinned = !field.pinned;
        }   
    }
//end supportingMethods
//end template
}

