//begin imports
//end imports

export class DataGridPerformancePercentCellUpdating {
    //begin eventHandler
    public dataGridPerformancePercentCellUpdating(grid: any, args: any): void {
        const goodBorder = "4px solid #4EB862";
        const badBorder = "4px solid #FF134A";

        const templ = args.cellInfo;
        const priceShiftUp = templ.value >= 0;

        const content = args.content;
        let sp: any;
        if (content.childElementCount > 0) {
            sp = content.children[0];
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
        }

        sp.textContent = (+templ.value).toFixed(2) + "%";

        if (sp.__isUp === undefined || sp.__isUp !== priceShiftUp) {
            sp.__isUp = priceShiftUp;
            sp.style.paddingRight = "5px";
            sp.style.borderRight = priceShiftUp ? goodBorder : badBorder;
        }
    }
    //end eventHandler
}
