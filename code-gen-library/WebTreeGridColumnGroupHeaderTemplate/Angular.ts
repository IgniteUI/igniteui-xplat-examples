import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxColumnGroupComponent,
    IgxGridModule,
    IgxIconModule
 } from "igniteui-angular";
//begin template
@Component({
    template: `
    <!--begin content-->
    <ng-template #template let-col>
        <div class="column-group-template__container">
            <igx-icon [attr.draggable]="false"
                      (click)="toggleColumnGroup(col)"
                      class="column-group-template__icon">
                      {{columnGroupStates.get(col) ? 'expand_more' : 'expand_less'}}</igx-icon>
            {{col.header}}
        </div>
    </ng-template>
    <!--end content-->
    `,
    styles: [``]
})
export class WebTreeGridColumnGroupHeaderTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;

//begin supportingMethods
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();
    public toggleColumnGroup(columnGroup: IgxColumnGroupComponent) {
        const columns = columnGroup.children.toArray();
        if (columnGroup.header === 'General Information') {
            const col = columns[1];
            col.hidden = !col.hidden;
        } else if (columnGroup.header === 'Address Information') {
            for (const col of columns) {
                col.hidden = !col.hidden;
            }
        }
        this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
    }
//end supportingMethods
}
@NgModule({
    bootstrap: [],
    declarations: [
        WebTreeGridColumnGroupHeaderTemplateComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      IgxGridModule,
      IgxIconModule
  ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class WebTreeGridColumnGroupHeaderTemplateModule {
}
//end template