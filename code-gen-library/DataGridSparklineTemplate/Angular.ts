import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IgxSparklineCoreModule } from "igniteui-angular-charts";

//begin imports
//end imports

//begin template
@Component({
    template: `
<!-- begin content -->
    <ng-template let-cell #template>
        <div style="width: 100%; height: 70px; background: transparent">
            <igx-sparkline
                width="100%"
                height="100%"
                displayType="Line"
                [dataSource]="cell.rowItem.OrderHistory"
                valueMemberPath="Sold"
                labelMemberPath="Week"
                brush="rgb(21, 190, 6)">
            </igx-sparkline>
        </div>
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class DataGridSparklineTemplateComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        DataGridSparklineTemplateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IgxSparklineCoreModule
    ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class DataGridSparklineTemplateModule {

}
//end template
