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
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
    `,
    styles: [`
.grid__wrapper {
    margin: 16px;
}

.gridSample__filter {
    width: rem(200px);
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
`]
})
export class WebGridFilterAltIconTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridFilterAltIconTemplateComponent
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
export class WebGridFilterAltIconTemplateModule {

}
//end template