import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxGridModule,
    IgxBadgeModule,
    IgxIconModule,
    IgxProgressBarModule
 } from "igniteui-angular";

//begin template
@Component({
    template: `
   <ng-template #template igxCell let-val>
        <div class="linear-bar-container" style="width: 4rem">
            <igx-linear-bar [textVisibility]="false" class="cell__inner_2" [value]="val"></igx-linear-bar>
        </div>
    </ng-template>
    `,
    styles: [`
.linear-bar-container {
    width: 100%;
}
.cell__inner_2 {
    display: flex;
    align-items: center;
    height: 100%;
}
    `]
})
export class WebGridProgressCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridProgressCellTemplateComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      IgxGridModule,
      IgxBadgeModule,
      IgxIconModule,
      IgxProgressBarModule
  ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class WebGridProgressCellTemplateModule {

}
//end template