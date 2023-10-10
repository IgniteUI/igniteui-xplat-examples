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
     <ng-template #template igxGroupByRow let-groupRow>
        <div class="igx-group-label">
            <igx-icon family="material" class="igx-group-label__icon">group_work</igx-icon>
            <span class="igx-group-label__column-name">
                {{ groupRow.expression.fieldName }}:
            </span>
            <span class="igx-group-label__text">{{ isDate(groupRow.value) ? formatDate(groupRow.value) : groupRow.value }}</span>
            <igx-badge [value]="groupRow.records.length" class='igx-group-label__count-badge'></igx-badge>
            <span style ="color:#09f;"> Ordered in 2017:</span><span class="igx-badge__circle igx-badge__circle--default" >{{ calc2017(groupRow.records)}}</span>
        </div>
    </ng-template>
    `,
    styles: [``]
})
export class WebGridGroupByRowTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public isDate(value: any) {
        if (value instanceof Date) {
            return true;
        } else {
            return false;
        }
    }

    public calc2017(values: any[]) {
        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        return values.filter((x) => new Date(x.OrderDate) >= startDate && new Date(x.OrderDate) <= endDate).length;
    }
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridGroupByRowTemplateComponent
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
export class WebGridGroupByRowTemplateModule {

}
//end template