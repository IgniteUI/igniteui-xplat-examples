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
    <ng-template #template igxCellEditor let-cell="cell">
                    <div class="contact-container--edit">
                        <div style="display:flex; margin-top:3px">
                            <div>
                                <strong>Name:</strong> {{cell.row.data.ContactName}}
                                <igx-input-group width="100%">
                                    <input igxInput [(ngModel)]="cell.row.data.ContactName" />
                                </igx-input-group>
                            </div>
                            <div style="margin-left: 10px">
                                <strong>Title:</strong> {{cell.row.data.ContactTitle}}
                                <igx-input-group width="100%">
                                    <input igxInput [(ngModel)]="cell.row.data.ContactTitle" />
                                </igx-input-group>
                            </div>
                        </div>
                        <div style="margin-top: 10px">
                            <strong>Company:</strong> {{cell.row.data.Company}}
                            <igx-input-group width="100%">
                                <input igxInput [(ngModel)]="cell.row.data.Company" />
                            </igx-input-group>
                        </div>
                    </div>
    </ng-template>
<!--end content-->
    `,
    styles: [`
.contact-container--edit {
    margin-bottom:5px
}
    `]
})
export class WebGridCompositeContactEditCellTemplateComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridCompositeContactEditCellTemplateComponent
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
export class WebGridCompositeContactEditCellTemplateModule {

}
//end template