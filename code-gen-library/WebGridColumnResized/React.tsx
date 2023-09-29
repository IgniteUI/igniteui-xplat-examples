//begin imports
import { IgrGridBaseDirective, IgrColumnResizeEventArgs } from 'igniteui-react-grids';
//end imports

export class WebGridColumnResized {
    //begin eventHandler
    public webGridColumnResized(grid: IgrGridBaseDirective, args: IgrColumnResizeEventArgs): void {
        var col = args.detail.column;
        var pWidth = args.detail.prevWidth;
        var nWidth = args.detail.newWidth;
    }
    //end eventHandler
}