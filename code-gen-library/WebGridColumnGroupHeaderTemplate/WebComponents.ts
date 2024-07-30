//begin imports
import { IgcGridComponent, IgcColumnTemplateContext, IgcColumnGroupComponent, IgcColumnComponent } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports
export class WebGridColumnGroupHeaderTemplate {
//begin template
//begin content
public webGridColumnGroupHeaderTemplate = (ctx: IgcColumnTemplateContext) => {
    const column = (ctx as any).column;
    return html`<div style="display:flex;align-items:center;gap:5px;">
                <span draggable="false"  @click=${(e: any) => this.toggleColumnGroup(column)}>
            ${this.columnGroupStates.get(column) ? "🔽" : "🔼"}
                </span>
                    <span>${column.header}</span>
                </div>`;
};
//end content
//begin supportingMethods
public columnGroupStates = new Map<IgcColumnGroupComponent, boolean>();
public toggleColumnGroup(columnGroup: IgcColumnGroupComponent) {
    const columns = columnGroup.childColumns;
    if (columnGroup.header === 'General Information') {
        const col = columns[1] as IgcColumnComponent;
        col.hidden = !col.hidden;
    } else if (columnGroup.header === 'Address Information') {
        for (const col of columns) {
            const c = col as IgcColumnComponent;
            c.hidden = !c.hidden;
        }
    }
    this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
}
//end supportingMethods
//end template
}