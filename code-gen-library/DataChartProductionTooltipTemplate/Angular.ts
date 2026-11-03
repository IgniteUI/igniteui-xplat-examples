import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//begin imports
//end imports

//begin template
@Component({
    template: `
<!-- begin content -->
    <ng-template let-dataContext #template>
        <!-- Every fuel is listed whichever column is hovered, so the reader sees the country's whole
             mix; the one the hovered series draws is tinted with that series' own brush so it can be
             picked out of the five. -->
        <div class="ui-tooltip-content" *ngIf="dataContext.item && dataContext.series">
            <div class="tooltipTitle">{{dataContext.item.country}} Production</div>
            <div class="tooltipHorizontal" *ngFor="let fuel of fuels"
                 [style.color]="dataContext.series.valueMemberPath === fuel ? dataContext.series.actualBrush : 'black'">
                <label class="tooltipLbl" style="width: 4rem">{{fuel}}:</label>
                <label class="tooltipVal">{{dataContext.item[fuel.toLowerCase()]}}</label>
            </div>
        </div>
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class DataChartProductionTooltipTemplateComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;

    public fuels: string[] = ["Coal", "Hydro", "Nuclear", "Gas", "Oil"];
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
