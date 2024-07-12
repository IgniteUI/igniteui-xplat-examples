import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxGridModule,
    IgxBadgeModule,
    IgxIconModule
 } from "igniteui-angular";

//begin template
@Component({
    template: `
<!--begin content-->
    <ng-template igxCell let-cell="cell" let-val let-row #template>
        {{+val | currency}}
    </ng-template>
<!--end content-->
    `,
    styles: [`
<!--begin styles-->
.grid__wrapper {
    margin: 16px;
}

.gridSample__filter {
    width: rem-convert(200px);
}

.cell__inner,
.cell__inner_2 {
  display: flex;
  align-items: center;
  height: 100%;
}

.cell__inner {
  position: relative;
  justify-content: space-between;
}

.density-chooser {
    margin-bottom: 16px;
}

igx-buttongroup{
    display: block;
    width: 500px;
}
<!--end styles-->
`]
})
export class WebGridUnitPriceCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;

//begin supportingMethods
    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
//end supportingMethods
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridUnitPriceCellTemplateComponent
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
export class WebGridUnitPriceCellTemplateModule {

}
//end template