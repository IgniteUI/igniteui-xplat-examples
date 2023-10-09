import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	IgxGridModule
 } from "igniteui-angular";

//begin template
@Component({
    template: `
    <!--begin content-->
    <ng-template igxCell let-cell="cell" let-val>
        <img *ngIf="val" src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/active.png" title="Continued" alt="Continued" />
        <img *ngIf="!val" src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
    </ng-template>
    <!--end content-->
    `,
    styles: []
})
export class WebGridDiscontinuedCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridDiscontinuedCellTemplateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IgxGridModule
    ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class WebGridDiscontinuedCellTemplateModule {

}
//end template