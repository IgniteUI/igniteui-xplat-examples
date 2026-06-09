//begin imports
//end imports

export class WebGridPinRowOnRendered {
    //begin eventHandler
    public webGridPinRowOnRendered(args: any): void {
        const grid = this.grid as any;
        grid.pinRow("ALFKI");
        grid.pinRow("AROUT");
    }
    //end eventHandler
}