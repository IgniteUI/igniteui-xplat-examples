//begin imports
import { IgcRowSelectionEventArgs } from 'igniteui-webcomponents-grids/grids';
import { IgcGridComponent, IgcExporterOptionsBase } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridToolbarExporting {
    //begin eventHandler
    public webGridToolbarExporting(evt:any): void {
        const args = evt.detail;
        const options: IgcExporterOptionsBase = args.options;
    
        options.fileName = `Report_${new Date().toDateString()}`;
        (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
                columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
        });
    }
    //end eventHandler
}