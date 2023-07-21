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
    <div class="address-container">
                        <div class="country-city">
                            <span><strong>Country:</strong> {{cell.row.data.Country}}</span>
                            <br>
                            <span><strong>City:</strong> {{cell.row.data.City}}</span>
                        </div>
                        <div class="phone-pscode">
                            <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}} </span>
                            <br>
                            <span><strong>Phone:</strong> {{cell.row.data.Phone}}</span>
                        </div>
                        <br />
    </div>
    </ng-template>
    `,
    styles: [`
.address-container{
    display: flex;
}

.address-container > div {
    margin: 5px;
}
    `]
})
export class WebGridCompositeAddressCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridCompositeAddressCellTemplateComponent
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
export class WebGridCompositeAddressCellTemplateModule {

}
//end template