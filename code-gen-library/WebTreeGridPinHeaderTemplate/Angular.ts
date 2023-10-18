import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxTreeGridModule,
       IgxBadgeModule,
       IgxIconModule
 } from "igniteui-angular";

//begin template
@Component({
    template: `
    <ng-template igxHeader let-column #template>
    <div class="title-inner">
        <span style="float:left">{{column.field}}</span>
        <igx-icon class="pin-icon" family="fas" name="fa-thumbtack" [attr.draggable]="false" (click)="toggleColumnPinning(column)"></igx-icon>
    </div>
</ng-template>
    `,
    styles: [`
.pin-icon {
    margin-left: 8px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #999;
}
.pin-icon:hover {
    color: #444;
}
.title-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`]
})
export class WebTreeGridPinHeaderTemplateComponent {
    @ViewChild("template", { static: true})
    public template: TemplateRef<any>;

    public toggleColumnPinning(column: any) {
        column.pinned ? column.unpin() : column.pin();
    }
}

@NgModule({
    bootstrap: [],
    declarations: [
        WebGridPinHeaderTemplateComponent
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
export class WebTreeGridPinHeaderTemplateModule {

}
//end template