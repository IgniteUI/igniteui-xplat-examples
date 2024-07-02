//begin imports
import { IgcHierarchicalGridComponent, IgcExporterEvent } from 'igniteui-angular';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class WebHierarchicalGridExportMultiColumnHeaders {
    //begin eventHandler
    public webHierarchicalGridExportMultiColumnHeaders(args: IgcExporterEvent): void {
        if (args.options) {
            args.options.ignoreMultiColumnHeaders = false;
        }
    }
    //end eventHandler
}