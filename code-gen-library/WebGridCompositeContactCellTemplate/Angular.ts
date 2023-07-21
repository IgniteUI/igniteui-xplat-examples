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
    <ng-template igxCell let-cell='cell' #template>
    <div class="contact-container">
                        <span><strong>Name:</strong> {{cell.row.data.ContactName}}</span>
                        <span><strong>Title:</strong> {{cell.row.data.ContactTitle}}</span>
                        <br />
                        <span><strong>Company:</strong> {{cell.row.data.CompanyName}}</span>
                        <br />
    </div>
    </ng-template>
    `,
    styles: [`
.contact-container > span {
    margin: 5px;
}
    `]
})
export class WebGridCompositeContactCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridCompositeContactCellTemplateComponent
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
export class WebGridCompositeContactCellTemplateModule {

}
//end template