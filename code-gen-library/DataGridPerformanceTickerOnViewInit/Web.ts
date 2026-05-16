//begin imports
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridPerformanceTickerOnViewInit {
    //begin eventHandler
    public lastDataUpdate: number = 0;
    public interval: number = 100;
    public timerStep: number = 16;
    public isTimerTicking: boolean = false;
    public toChangePerInterval: number = 200;

    public dataGridPerformanceTickerOnViewInit(): void {
        this.startTicking();
    }

    public startTicking(): void {
        if (!this.isTimerTicking) {
            this.isTimerTicking = true;
            setTimeout(() => this.onTimerTick(), this.timerStep);
        }
    }

    public onTimerTick(): void {
        if (!this.isTimerTicking) return;

        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (!grid) {
            setTimeout(() => this.onTimerTick(), this.timerStep);
            return;
        }

        const data: any[] = grid.dataSource as any[];
        if (!data) {
            setTimeout(() => this.onTimerTick(), this.timerStep);
            return;
        }

        const now = Date.now();
        const intervalElapsed = (now - this.lastDataUpdate) > this.interval;

        const toChangeIndexes: { [key: string]: boolean } = {};
        const useClear = false;

        let sortingByAvgSale = false;
        for (let i = 0; i < grid.sortDescriptions.count; i++) {
            const field = grid.sortDescriptions.item(i).field;
            if (field === "AvgSale" || field.indexOf("Change") >= 0) {
                sortingByAvgSale = true;
            }
        }

        if (intervalElapsed) {
            this.lastDataUpdate = now;
            for (let i = 0; i < this.toChangePerInterval; i++) {
                let index = Math.round(Math.random() * data.length - 1);
                while (toChangeIndexes[index.toString()] !== undefined) {
                    index = Math.round(Math.random() * data.length - 1);
                }
                toChangeIndexes[index.toString()] = true;
            }
        }

        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (toChangeIndexes[i.toString()] !== undefined) {
                if (sortingByAvgSale && !useClear) {
                    grid.notifyRemoveItem(i, item);
                    this.randomizeItem(item);
                    grid.notifyInsertItem(i, item);
                } else {
                    this.randomizeItem(item);
                }

                if (item.Change > 0) {
                    item.AvgSaleHeat = 1;
                } else {
                    item.AvgSaleHeat = -1;
                }
            } else {
                if (item.AvgSaleHeat > 0) {
                    item.AvgSaleHeat -= 0.06;
                    if (item.AvgSaleHeat < 0) item.AvgSaleHeat = 0;
                }
                if (item.AvgSaleHeat < 0) {
                    item.AvgSaleHeat += 0.06;
                    if (item.AvgSaleHeat > 0) item.AvgSaleHeat = 0;
                }
            }
        }

        if (!sortingByAvgSale || !intervalElapsed) {
            grid.invalidateVisibleRows();
        }

        setTimeout(() => this.onTimerTick(), this.timerStep);
    }

    public randomizeItem(item: any): void {
        item.Change = Math.random() * 40.0 - 20.0;
        const prevSale = item.AvgSale;
        item.AvgSale += item.Change;
        item.PercentChange = (item.AvgSale / prevSale) * 100.0;
    }
    //end eventHandler
}
