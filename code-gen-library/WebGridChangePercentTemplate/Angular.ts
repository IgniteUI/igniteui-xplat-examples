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
    <ng-template igxCell let-val>
                     <span class="cellAlignStyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}%</span>
       </ng-template>
    <!--end content-->
    `,
    styles: [`
<!--begin styles-->
.cellAlignStyle {
    text-align: right;
    float:right;
}
.cellAlignStyle > span {
    float:right;
}
.up {
    color: green;
}
.down {
    color: red;
}
.grid__wrapper {
  padding: 16px;
}
<!--end styles-->
`
    ]
})
export class WebGridChangePercentTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;

//begin supportingMethods
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
//end supportingMethods
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridChangePercentTemplateComponent
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
export class WebGridChangePercentTemplateModule {

}
//end template