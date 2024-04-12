//begin imports
import { IgrExporterEventArgs } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridExportMultiColumnHeaders {
    //begin eventHandler
    public webHierarchicalGridExportMultiColumnHeaders(args: CustomEvent<IgrExporterEventArgs>): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }
    //end eventHandler
}