//begin imports
import { IgcGridComponent, IgcGridKeydownEventArgs, GridKeydownTargetType } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridPasteFromExcel {

    //begin eventHandler
    public webGridPasteFromExcel() {
        const grid = document.getElementById("grid") as any;
        this.onKeyDown = this.onKeyDown.bind(this);
        grid.addEventListener("keydown", this.onKeyDown);
    }
    public onKeyDown(eventArgs: any): void {
        const ctrl = eventArgs.ctrlKey;
        const key = eventArgs.keyCode;
        // Ctrl-V || Shift-Ins || Cmd-V
        if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
            this.textArea.focus();
        }
    }

    private txtArea: any;
    public pasteMode = "Paste starting from active cell";

    public get textArea() {
        if(!this.txtArea) {
            const div = document.createElement("div");
            const divStyle = div.style;
            divStyle.position = "fixed";
            document.body.appendChild(div);
            this.txtArea = document.createElement("textarea");
            const style = this.txtArea.style;
            style.opacity = "0";
            style.height = "0px";
            style.width = "0px";
            style.overflow = "hidden";
            div.appendChild(this.txtArea);
    
            this.txtArea.addEventListener("paste", (eventArgs: any) => { this.onPaste(eventArgs); });
        }
        return this.txtArea;
    }

    public onPaste(eventArgs: any) {
        let data;
        const clData: any = "clipboardData";
    
        // get clipboard data - from window.cliboardData for IE or from the original event's arguments.
        if (window[clData]  as any) {
            (window.event as any).returnValue = false;
            data = (window[clData]  as any).getData("text");
        } else {
            data = eventArgs[clData].getData("text/plain");
        }
    
        // process the clipboard data
        const processedData = this.processData(data);
            if (this.pasteMode === "Paste data as new records") {
                this.addRecords(processedData);
            } else {
                this.updateRecords(processedData);
            }
        }

        public addRecords(processedData: any[]) {
            const grid = CodeGenHelper.getDescription<IgcGridComponent>("content") as any;
            const columns = grid.visibleColumns;
            const pk = grid.primaryKey;
            const addedData: any[] = [];
            for (const curentDataRow of processedData) {
                const rowData = {} as any;
                for (const col of columns) {
                    const index = columns.indexOf(col);
                    rowData[col.field] = curentDataRow[index];
                }
                // generate PK
                rowData[pk] = grid.data.length + 1;
                grid.addRow(rowData);
                addedData.push(rowData);
            }
            // scroll to last added row
            grid.navigateTo(grid.data.length - 1, 0, () => {
                this.clearStyles();
                for (const data of addedData) {
                    const row = grid.getRowByKey(data[pk]);
                    if (row) {
                        const rowNative = this.getNative(row) as any;
                        if (rowNative) {
                            rowNative.style["font-style"] = "italic";
                            rowNative.style.color = "gray";
                        }
                    }
                }
            });
        }
        public updateRecords(processedData: any[]) {
            const grid = CodeGenHelper.getDescription<IgcGridComponent>("content") as any;
            const cell = grid.selectedCells[0];
            const pk = grid.primaryKey;
            if (!cell) { return; }
            const rowIndex = cell.row.index;
            const columns = grid.visibleColumns;
            const cellIndex = grid.visibleColumns.indexOf(cell.column);
            let index = 0;
            const updatedRecsPK: any[] = [];
            for (const curentDataRow of processedData) {
                const rowData = {} as any;
                const dataRec = grid.data[rowIndex + index];
                const rowPkValue = dataRec ? dataRec[pk] : grid.data.length + 1;
                rowData[pk] = rowPkValue;
                for (let j = 0; j < columns.length; j++) {
                    let currentCell;
                    if (j >= cellIndex) {
                        currentCell = curentDataRow.shift();
                    }
                    const colKey = columns[j].field;
                    rowData[colKey] = currentCell || (dataRec ? dataRec[colKey] : null);
                }
                if (!dataRec) {
                    // no rec to update, add instead
                    rowData[pk] = rowPkValue;
                    grid.addRow(rowData);
                    continue;
                }
                grid.updateRow(rowData, rowPkValue);
                updatedRecsPK.push(rowPkValue);
                index++;
            }
    
            this.clearStyles();
            for (const pkVal of updatedRecsPK) {
                const row = grid.getRowByKey(pkVal);
                if (row) {
                    const rowNative = this.getNative(row) as any;
                    if (rowNative) {
                        rowNative.style["font-style"] = "italic";
                        rowNative.style.color = "gray";
                    }
                }
            }
        }
    
        protected clearStyles() {
            const rows = [...(document.getElementsByTagName("igx-grid-row") as any)];
            for (const rowNative of rows) {
                rowNative.style["font-style"] = "";
                rowNative.style.color = "";
            }
        }

        protected getNative(row: any) {
            const rows = [...(document.getElementsByTagName("igx-grid-row") as any)];
            const dataInd = row.index.toString();
            return rows.find(x => (x.attributes as any)["data-rowindex"] .value === dataInd);
        }
    
        public processData(data: any) {
            const pasteData = data.split("\n");
            for (let i = 0; i < pasteData.length; i++) {
                pasteData[i] = pasteData[i].split("\t");
                // Check if last row is a dummy row
                if (pasteData[pasteData.length - 1].length === 1 && pasteData[pasteData.length - 1][0] === "") {
                    pasteData.pop();
                }
                // remove empty data
                if (pasteData.length === 1 &&
                     pasteData[0].length === 1 &&
                      (pasteData[0][0] === "" || pasteData[0][0] === "\r")) {
                        pasteData.pop();
                }
            }
            return pasteData;
        }
    //end eventHandler
}