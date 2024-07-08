//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent, IgcRowType } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridChildRowStylesHandler {
//begin eventHandler
    public webHierarchicalGridChildRowStylesHandler = {
        'border-left': (row: IgcRowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
    };
//end eventHandler
}