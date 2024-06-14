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
        <div class="cell__inner_2">
                <img [src]="val" class="flag"
                style="border: 1px solid black;
                object-fit: fill;
                height: 2rem;
                width: 3rem;"/>
        </div>
    </ng-template>
<!--end content-->
    `,
    styles: [`
<!--begin styles-->
.cell__inner_2 {
    display: flex;
    align-items: center;
    height: 100%;
}
<!--end style-->
    `]
})
export class WebGridImageCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridImageCellTemplateComponent
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
export class WebGridImageCellTemplateModule {

}
//end template