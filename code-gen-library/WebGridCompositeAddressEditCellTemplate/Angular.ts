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
    <ng-template #template igxCellEditor let-cell="cell">
                    <div class="address-container--edit">
                        <div>
                            <span><strong>Country:</strong> {{cell.row.data.Country}}</span>
                            <igx-input-group width="100%">
                                <input #country igxInput [(ngModel)]="cell.row.data.Country" />
                            </igx-input-group>
                            <br>
                            <span><strong>City:</strong> {{cell.row.data.City}}</span>
                            <igx-input-group width="100%">
                                <input #city igxInput [(ngModel)]="cell.row.data.City" />
                            </igx-input-group>
                        </div>
                        <div>
                            <span><strong>Postal Code:</strong> {{cell.row.data.PostalCode}}</span>
                            <igx-input-group width="100%">
                                <input #postalCode igxInput [(ngModel)]="cell.row.data.PostalCode" />
                            </igx-input-group>
                            <br>
                            <span><strong>Selected:</strong> {{cell.row.selected}}</span>
                            <igx-input-group width="100%">
                                <input #postalCode igxInput [(ngModel)]="cell.row.data.Phone" />
                            </igx-input-group>
                        </div>
                        <br>
                    </div>
    </ng-template>
    `,
    styles: [`
.address-container--edit {
    display: flex;
    margin-bottom:5px;
    margin-top:3px;
}
.address-container--edit > div {
    margin-left: 10px;
}
    `]
})
export class WebGridCompositeAddressEditCellTemplateComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridCompositeAddressEditCellTemplateComponent
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
export class WebGridCompositeAddressEditCellTemplateModule {

}
//end template