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
        <div class="ui-chart-default-tooltip-content">text</div>
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class TestsAddStaticTextTooltipComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        TestsAddStaticTextTooltipComponent
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
export class TestsAddStaticTextTooltipModule {

}
//end template
