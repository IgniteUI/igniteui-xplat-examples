//begin imports
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
//end imports

//begin supportingTypes
/**
 * Keeps the performance grid's sales figures changing: every tick it picks rows to change, at most as
 * many as the grid has, and refreshes the rest. Started when the sample's view is ready and stopped when it
 * is torn down, so a page shows one ticker and never one left from a page before it.
 */
export class DataGridPerformanceTicker {
    public lastDataUpdate: number = 0;
    public interval: number = 100;
    public timerStep: number = 16;
    public isTimerTicking: boolean = false;
    public toChangePerInterval: number = 200;

    private grid: IgcDataGridComponent | null = null;

    public start(grid: IgcDataGridComponent): void {
        this.grid = grid;
        this.startTicking();
    }

    public stop(): void {
        this.isTimerTicking = false;
        this.generation++;
        this.grid = null;
    }

    private generation: number = 0;

    // A tick belongs to the start that scheduled it, so a stop and a restart in quick succession leave one
    // ticking loop rather than two.
    private scheduleTick(): void {
        const generation = this.generation;
        setTimeout(() => {
            if (generation === this.generation) {
                this.onTimerTick();
            }
        }, this.timerStep);
    }

    public startTicking(): void {
        if (!this.isTimerTicking) {
            this.isTimerTicking = true;
            this.scheduleTick();
        }
    }

    public onTimerTick(): void {
        if (!this.isTimerTicking) return;

        const grid = this.grid;
        if (!grid) {
            this.scheduleTick();
            return;
        }

        const data: any[] = grid.dataSource as any[];
        if (!data) {
            this.scheduleTick();
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
            const toChange = Math.min(this.toChangePerInterval, data.length);
            for (let i = 0; i < toChange; i++) {
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

        this.scheduleTick();
    }

    public randomizeItem(item: any): void {
        item.Change = Math.random() * 40.0 - 20.0;
        const prevSale = item.AvgSale;
        item.AvgSale += item.Change;
        item.PercentChange = (item.AvgSale / prevSale) * 100.0;
    }
    }
//end supportingTypes
