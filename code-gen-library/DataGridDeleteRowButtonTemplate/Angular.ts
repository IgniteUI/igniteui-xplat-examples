//begin imports
import { IgxDataGridComponent } from 'igniteui-angular-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';
import { Component, TemplateRef, ViewChild } from '@angular/core';

//begin template
@Component({
    template: `
<!--begin content-->
<ng-template let-cell #template>
    <button type="button" [disabled]="cell.isDeleted" (click)="deleteRow(cell)">Delete</button>
</ng-template>
<!--end content-->
    `
})
export class DataGridDeleteRowButtonTemplateComponent {
    @ViewChild('template', { static: true })
    public template: TemplateRef<any>;

//begin supportingMethods
    public deleteRow(cell: any): void {
        const grid = CodeGenHelper.getDescription<IgxDataGridComponent>('content');
        grid.removeItem(cell.rowItem);
    }
//end supportingMethods
}
//end template
