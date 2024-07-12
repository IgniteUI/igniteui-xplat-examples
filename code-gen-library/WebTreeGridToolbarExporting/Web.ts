//begin imports
import { IgcExporterOptionsBase, IgcGridToolbarExportEventArgs, IgcTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

export class WebTreeGridToolbarExporting {
    //begin eventHandler
    public webTreeGridToolbarExporting(evt: CustomEvent<IgcGridToolbarExportEventArgs>): void {
        const args = evt.detail;
        const options: IgcExporterOptionsBase = args.options;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Name';
            });
        }
    }
    //end eventHandler
}