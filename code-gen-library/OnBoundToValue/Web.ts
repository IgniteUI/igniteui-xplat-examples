//begin imports
//end imports

export class OnBoundToValue {
    //begin eventHandler
    public onBoundToValue(s: any, args: any): void {
        args.cellInfo.renderValue = args.cellInfo.originalValue;
    }
    //end eventHandler
}
