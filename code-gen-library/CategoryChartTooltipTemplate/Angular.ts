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
        <div class="tooltipVertical" *ngIf="dataContext.item">
            <div class="tooltipTitle">Franchise: {{dataContext.item.franchise}}</div>
            <div class="tooltipLbl">Revenue of All Movies: {{dataContext.item.totalRevenue}}</div>
            <div class="tooltipLbl">Highest Grossing Movie: {{'$' + dataContext.item.highestGrossing}}</div>
        </div>
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class CategoryChartTooltipTemplateComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        CategoryChartTooltipTemplateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class CategoryChartTooltipTemplateModule {

}
//end template
