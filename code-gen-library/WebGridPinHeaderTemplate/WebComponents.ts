//begin imports
import { IgcGridComponent, IgcColumnTemplateContext} from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

export class WebGridPinHeaderTemplateComponent {
//begin template
//begin content
public webGridPinHeaderTemplate = (ctx: IgcColumnTemplateContext) => {

    const column = (ctx as any).column;
    return html`<div>
                 <span style="float:left">${column.field}</span>
                 <span style="float:right" @pointerdown=${(e: any) => this.toggleColumnPin(column.field)}>📌</span>
               </div>`;
    };
//end content
//begin supportingMethods
public toggleColumnPin(field: string) {
    var grid = document.getElementsByTagName("igc-grid")[0] as IgcGridComponent;
    var col = grid.getColumnByName(field);
    col.pinned = !col.pinned;
    grid.markForCheck();
}
//end supportingMethods
//end template
}

