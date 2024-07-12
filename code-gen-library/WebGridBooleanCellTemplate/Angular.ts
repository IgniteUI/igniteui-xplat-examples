import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
    IgxGridModule,
       IgxBadgeModule,
       IgxIconModule
 } from "igniteui-angular";

//begin imports
//end imports

//begin template
@Component({
    template: `
<!-- begin content -->
    <ng-template igxCell let-val #template>
        <img *ngIf="val" src="https://static.infragistics.com/xplatform/images/grid/active.png" title="Continued" alt="Continued" />
        <img *ngIf="!val" src="https://static.infragistics.com/xplatform/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class WebGridBooleanCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridBooleanCellTemplateComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      IgxGridModule,
      IgxBadgeModule,
      IgxIconModule
  ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class WebGridBooleanCellTemplateModule {

}
//end template
