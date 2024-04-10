//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent, IgcRowType } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRowStylesHandler {
//begin template
//begin content
    public webHierarchicalGridRowStylesHandler = {
        background:(row: IgcRowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
        'border-left': (row: IgcRowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
    };
//end content
//end template
}