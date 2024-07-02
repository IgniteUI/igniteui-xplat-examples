//begin imports
import { IgrExporterEventArgs, IgrGrid } from 'igniteui-react-grids';
//end imports

export class WebGridExportEventMultiColumnHeaders {
    //begin eventHandler
    public webGridExportEventMultiColumnHeaders(args: CustomEvent<IgrExporterEventArgs>): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }
    //end eventHandler
}