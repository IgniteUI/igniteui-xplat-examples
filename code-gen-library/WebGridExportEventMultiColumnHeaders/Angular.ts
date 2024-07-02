//begin imports
import { IgcGridComponent, IgcExporterEvent } from 'igniteui-angular';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class WebGridExportEventMultiColumnHeaders {
    //begin eventHandler
    public webGridExportEventMultiColumnHeaders(args: CustomEvent<IgcExporterEvent>): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }
    //end eventHandler
}