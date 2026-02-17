//begin imports
import { IgcGridComponent, IgcColumnTemplateContext} from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridPinHeaderTemplateComponent {
//begin template
//begin content
public webGridPinHeaderTemplate = (ctx: IgcColumnTemplateContext) => {

    const column = (ctx as any).column;
    return html`<div style="display:flex;">
                 <span>${column.field}</span>
                 <span style="margin-left: auto; cursor: pointer;" @pointerdown=${(e: any) => this.toggleColumnPin(column.field)}>📌</span>
               </div>`;
    };
//end content
//begin supportingMethods
public toggleColumnPin(field: string) {
    var grid: IgcGridComponent = CodeGenHelper.getDescription<IgcGridComponent>("content");
    var col = grid.getColumnByName(field);
    col.pinned = !col.pinned;
    grid.markForCheck();
}
//end supportingMethods
//end template
}

