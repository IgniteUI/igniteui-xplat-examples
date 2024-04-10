//begin imports
import { IgcHierarchicalGridComponent, IgcExporterEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridExportMultiColumnHeaders {
    //begin eventHandler
    public webHierarchicalGridExportMultiColumnHeaders(args: CustomEvent<IgcExporterEventArgs>): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }
    //end eventHandler
}