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
    <ng-template igxCell let-val #template>
        <div class="currency-badge-container">
            <igx-badge *ngIf="val>0" type="success" position="bottom-right" icon="arrow_upward" class="badge-left"></igx-badge>
            <igx-badge *ngIf="val<0" type="error" position="bottom-right" icon="arrow_downward" class="error badge-left"></igx-badge>
            <span class="cellAlignStyle" [class.up]="val>0" [class.down]="val<0">{{ formatNumber(val) }}</span>
        </div>
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

.currency-badge-container {
    width: 80px;
    float: right;
}

.badge-left {
    float: left;
}
<!--end styles-->
`
    ]
})
export class WebGridCurrencyCellTemplateComponent {
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
        WebGridCurrencyCellTemplateComponent
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
export class WebGridCurrencyCellTemplateModule {

}
//end template