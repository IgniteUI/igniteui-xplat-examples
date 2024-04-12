//begin imports
import { IgcGridComponent, IgcExporterEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridExportEventMultiColumnHeaders {
    //begin eventHandler
    public webGridExportEventMultiColumnHeaders(args: CustomEvent<IgcExporterEventArgs>): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }
    //end eventHandler
}