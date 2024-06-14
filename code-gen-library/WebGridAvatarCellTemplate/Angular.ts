import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
    IgxGridModule,
    IgxBadgeModule,
    IgxIconModule,
    IgxAvatarModule
 } from "igniteui-angular";

//begin imports
//end imports

//begin template
@Component({
    template: `
<!-- begin content -->
    <ng-template igxCell let-val let-cell="cell" #template>
            <igx-avatar [src]="cell.row.data.Avatar" [roundShape]="true" size="small"></igx-avatar>
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class WebGridAvatarCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridAvatarCellTemplateComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      IgxGridModule,
      IgxBadgeModule,
      IgxAvatarModule,
      IgxIconModule
  ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class WebGridAvatarCellTemplateModule {

}
//end template
