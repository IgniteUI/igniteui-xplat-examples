import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IgxDataChartCoreModule } from "igniteui-angular-charts";

//begin imports
//end imports

//begin eventHandler
//OMIT HANDLER
//end eventHandler

//begin template
@Component({
    template: `
<!-- begin content -->
    <ng-template let-context #template>
        <div class="ui-chart-default-tooltip-content">{{ context.item.Name }}</div>
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class TestsAddNameTooltipComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        TestsAddNameTooltipComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IgxDataChartCoreModule
    ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class TestsAddNameTooltipModule {

}
//end template
