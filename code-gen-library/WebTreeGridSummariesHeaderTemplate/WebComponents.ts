//begin imports
import { IgcColumnTemplateContext, IgcColumnComponent } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridSummariesHeaderTemplate {
  //begin template
  //begin content
  public webTreeGridSummariesHeaderTemplate = (ctx: IgcColumnTemplateContext) => {

    const column = (ctx as any).column;
    return html`<div>
                 <span style="float:left">${column.field}</span>
                 <span style="float:right; color: ${column.hasSummary ? '#e41c77' : ''}" @pointerdown=${(e: any) => this.toggleSummary(column)}>∑</span>
               </div>`;
  };
  //end content
  //begin supportingMethods
  public toggleSummary(field: IgcColumnComponent) {
    if (field) {
      field.hasSummary = !field.hasSummary;
    }
  }
  //end supportingMethods
  //end template
}

