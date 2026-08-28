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
        <!-- A seat is identified by where it is and what it costs, and the two things the plan is
             coloured by -- its cabin class and whether it is sold -- are named here as well, so the
             colour under the pointer can be read rather than guessed at from the legend. -->
        <div class="ui-tooltip-content" *ngIf="dataContext.item">
            <div>Class: {{dataContext.item.class}}</div>
            <div>Seat: {{dataContext.item.seat}}</div>
            <div>Price: ${{dataContext.item.price}}</div>
            <div>Status: {{dataContext.item.status}}</div>
        </div>
    </ng-template>
<!-- end content -->
    `,
    styles: [``]
})
export class DataChartAirplaneSeatTooltipTemplateComponent {
    @ViewChild("template", { static: true })
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        DataChartAirplaneSeatTooltipTemplateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class DataChartAirplaneSeatTooltipTemplateModule {

}
//end template
