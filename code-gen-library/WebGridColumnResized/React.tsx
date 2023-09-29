//begin imports
import { IgrRowSelectionEventArgs } from 'igniteui-react-grids';
//end imports

export class WebGridColumnResized {
    //begin eventHandler
    public webGridColumnResized(args: IgrRowSelectionEventArgs): void {
        var col = args.detail.column;
        var pWidth = args.detail.prevWidth;
        var nWidth = args.detail.newWidth;
    }
    //end eventHandler
}