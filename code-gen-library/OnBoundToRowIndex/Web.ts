//begin imports
//end imports

export class OnBoundToRowIndex {
    //begin eventHandler
    public onBoundToRowIndex(s: any, args: any): void {
        args.cellInfo.renderValue = args.cellInfo.dataRow;
    }
    //end eventHandler
}
