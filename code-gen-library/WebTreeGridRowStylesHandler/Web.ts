//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcTreeGridComponent, IgcRowType } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridRowStylesHandler {
//begin eventHandler
    public webTreeGridRowStylesHandler = {
        'background': (row: IgcRowType) => row.data['Title'] === 'CEO' ? '#6c757d' : row.data['Title'].includes('President') ? '#adb5bd' :
            row.data['Title'].includes('Director') ? '#ced4da' : row.data['Title'].includes('Manager') ? '#dee2e6' :
            row.data['Title'].includes('Lead') ? '#e9ecef' : row.data['Title'].includes('Senior') ? '#f8f9fa' : null,
        'border-left': (row: IgcRowType) => row.data['Title'] === 'CEO' || row.data['Title'].includes('President') ? '2px solid' : null,
        'border-color': (row: IgcRowType) => row.data['Title'] === 'CEO' ? '#495057' : null,
        'color': (row: IgcRowType) => row.data['Title'] === 'CEO' ? '#fff' : null
    };
//end eventHandler
}