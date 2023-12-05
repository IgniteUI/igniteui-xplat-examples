//begin imports
import { IgcGridComponent, IgcExporterEvent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridExportEventMultiColumnHeaders {
    //begin eventHandler
    public webGridExportEventMultiColumnHeaders(args: CustomEvent<IgcExporterEvent>): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }
    //end eventHandler
}