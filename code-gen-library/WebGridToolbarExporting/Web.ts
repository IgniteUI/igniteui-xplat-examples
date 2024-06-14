//begin imports
import { IgcExporterOptionsBase, IgcGridToolbarExportEventArgs, IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridToolbarExporting {
    //begin eventHandler
    public webGridToolbarExporting(evt: CustomEvent<IgcGridToolbarExportEventArgs>): void {
        const args = evt.detail;
        const options: IgcExporterOptionsBase = args.options;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
            });
        }
    }
    //end eventHandler
}