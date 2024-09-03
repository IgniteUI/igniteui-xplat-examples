//begin imports
import { IgrGrid, IgrGridToolbarExportEventArgs, IgrExporterOptionsBase } from 'igniteui-react-grids';

//end imports

export class WebGridToolbarExporting {
    //begin eventHandler
    public webGridToolbarExporting(sender: IgrGrid, evt: IgrGridToolbarExportEventArgs): void {
        const args = evt.detail;
        const options: IgrExporterOptionsBase = (args.nativeElement as any).options;
        const exporter = (args.nativeElement as any).exporter;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            exporter.columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
            });
        }
    } 
    //end eventHandler
}