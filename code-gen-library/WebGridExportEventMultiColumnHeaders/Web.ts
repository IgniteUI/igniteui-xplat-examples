//begin imports
import { IgcGridComponent, IgcExporterEventEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridExportEventMultiColumnHeaders {
    //begin eventHandler
    public webGridExportEventMultiColumnHeaders(args: CustomEvent<IgcExporterEventEventArgs>): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }
    //end eventHandler
}