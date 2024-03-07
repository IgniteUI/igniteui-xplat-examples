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
    const columns = Array.from(columnGroup.children);
    if (columnGroup.header === 'General Information') {
        const column = columns[1] as IgcColumnComponent;
        column.hidden = !column.hidden;
    } else if (columnGroup.header === 'Address Information') {
        for (const column of columns) {
            const col = column as IgcColumnComponent;
            if (col.header === "Location"){
                for (const cl of col.columnChildren) {
                    const c = cl as IgcColumnComponent;
                    if (c.field !== "Address"){
                        c.hidden = !c.hidden;
                    }
                }
            }
            else if (col.header === "Contact Information"){
                const c = col.columnChildren[1] as IgcColumnComponent;
                c.hidden = !c.hidden;
            }
        }
    } else {
        for (let i = 1; i < columns.length; i++) {
            const c = columns[i] as IgcColumnComponent;
            c.hidden = !c.hidden;
        }
    }
    this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
}
//end supportingMethods
//end template
}