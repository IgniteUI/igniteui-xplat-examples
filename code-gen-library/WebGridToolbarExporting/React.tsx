//begin imports
import { IgrGrid, IgrGridToolbarExportEventArgs, IgrExporterOptionsBase } from 'igniteui-react-grids';

//end imports

export class WebGridToolbarExporting {
    //begin eventHandler
    public webGridToolbarExporting(evt: IgrGridToolbarExportEventArgs): void {
        const args = evt.detail;
        const options: IgrExporterOptionsBase = args.options;
        const exporter = args.exporter as any;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            exporter.columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
            });
        }
    } 
    //end eventHandler
}