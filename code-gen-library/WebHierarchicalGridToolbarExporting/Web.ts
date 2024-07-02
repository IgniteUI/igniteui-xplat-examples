//begin imports
import { IgcExporterOptionsBase, IgcGridToolbarExportEventArgs, IgcHierarchicalGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

export class WebHierarchicalGridToolbarExporting {
    //begin eventHandler
    public webHierarchicalGridToolbarExporting(evt: CustomEvent<IgcGridToolbarExportEventArgs>): void {
        const args = evt.detail;
        const options: IgcExporterOptionsBase = args.options;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Photo';
            });
        }
    }
    //end eventHandler
}