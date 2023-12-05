import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxGridModule,
       IgxBadgeModule,
       IgxIconModule,
    IgxExpansionPanelModule
 } from "igniteui-angular";

//begin template
@Component({
    template: `
    <ng-template #template igxCell let-people let-cell="cell">
        <div class='expand'>
                    <div class="employees-container">
                        <igx-expansion-panel *ngFor="let person of people">
                            <igx-expansion-panel-header iconPosition="right">
                                <igx-expansion-panel-description>
                                    {{ person.Name }}
                                </igx-expansion-panel-description>
                            </igx-expansion-panel-header>
                            <igx-expansion-panel-body>
                                <div class="description">
                                    <igx-input-group  displayDensity="compact">
                                        <label igxLabel for="title">Title</label>
                                        <input type="text" name="title" igxInput [(ngModel)]="person.Title" style="text-overflow: ellipsis;" />
                                    </igx-input-group>
                                    <igx-input-group  displayDensity="compact">
                                        <label igxLabel for="age">Age</label>
                                        <input type="number" name="age" igxInput [(ngModel)]="person.Age" />
                                    </igx-input-group>
                                </div>
                            </igx-expansion-panel-body>
                        </igx-expansion-panel>
                    </div>
    </div>
    </ng-template>
    `,
    styles: [`
    igx-expansion-panel {
    display: flex;
    font-size: .75rem;
    min-width: 50%;
    max-width: 50%;
    padding: 0;
    flex: 1 1 auto;
    }
    igx-expansion-panel-description, igx-expansion-panel-body {
        font-size: .75rem;
        padding: 0;
        display: flex;
        flex: 1 1 auto;
    }

    .description {
        display: flex;
        width: 100%;
        text-overflow: ellipsis;
        padding: .5rem 1rem;
        flex: 1 1 auto;
        flex-direction: column;
    }

    .employees-container {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    }
    .employees-container--edit {
        display: flex;
        flex-flow: row wrap;
        flex-grow: 1;
    }
    .employees-container--edit > igx-expansion-panel {
            display: flex;
            min-width: 50%;
            flex: 1 0 auto;
    }
    .expand {
        padding: 2px;
        background: #fff !important;
    }
    .expand > .igx-expansion-panel__header-description {
            font-weight: bold;
    }
    `]
})
export class WebGridNestedDataCellTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridNestedDataCellTemplateComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      IgxGridModule,
      IgxBadgeModule,
      IgxIconModule,
      IgxExpansionPanelModule
  ],
    providers: [],
    entryComponents: [],
    schemas: []
})
export class WebGridNestedDataCellTemplateModule {

}
//end template