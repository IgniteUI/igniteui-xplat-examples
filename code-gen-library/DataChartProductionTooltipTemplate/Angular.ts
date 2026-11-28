import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//begin imports
//end imports

//begin template
@Component({
    template: `
<!-- begin content -->
    <ng-template let-item="item" let-series="series" #template>
        <!-- Every fuel is listed whichever column is hovered, so the reader sees the country's whole
             mix; the one the hovered series draws is tinted with that series' own brush so it can be
             picked out of the five. -->
        @if (item && series) {
        <div class="ui-tooltip-content">
            <div class="tooltipTitle">{{item.Country}} Production</div>
            @for (fuel of ['Coal', 'Hydro', 'Nuclear', 'Gas', 'Oil']; track fuel) {
            <div class="tooltipHorizontal"
                 [style.color]="series.valueMemberPath === fuel ? series.actualBrush : 'black'">
                <!-- The space is in the label: Angular drops the whitespace between elements that reads as one elsewhere. -->
                <label class="tooltipLbl" style="width: 4rem">{{fuel}}: </label>
                <label class="tooltipVal">{{item[fuel]}}</label>
            </div>
            }
        </div>
        }
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class DataChartProductionTooltipTemplateComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;

}

@NgModule({
    bootstrap: [],
    declarations: [
        DataChartProductionTooltipTemplateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class DataChartProductionTooltipTemplateModule {

}
//end template
