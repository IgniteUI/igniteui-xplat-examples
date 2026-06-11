//begin imports
import { IgcDataGridComponent, IgcColumnGroupDescription } from 'igniteui-webcomponents-grids';
import { ListSortDirection } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridLiveDataTickerOnViewInit {
    //begin eventHandler
    public lastUpdateTime: number = 0;
    public frequency: number = 1000;
    public dataVolume: number = 500;
    public isTimerTicking: boolean = false;
    public isUpdatingAllPrices: boolean = false;
    public isUpdatingSomePrices: boolean = false;
    public useHeatBackground: boolean = true;
    public useRowGrouping: boolean = true;

    public dataGridLiveDataTickerOnViewInit(): void {
        this.onGridGroupingAdd();
    }

    public stopTicking(): void {
        if (this.isTimerTicking) {
            this.isTimerTicking = false;
        }
    }

    public startTicking(): void {
        if (!this.isTimerTicking) {
            this.isTimerTicking = true;
            setTimeout(() => this.onTimerTick(), this.frequency);
        }
    }

    public onTimerTick(): void {
        if (!this.isTimerTicking) return;

        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (!grid) {
            setTimeout(() => this.onTimerTick(), this.frequency);
            return;
        }

        const data: any[] = grid.dataSource as any[];
        if (!data) {
            setTimeout(() => this.onTimerTick(), this.frequency);
            return;
        }

        let stillAnimating = false;
        const useClear = this.isUpdatingAllPrices;
        const updateAll = this.isUpdatingAllPrices;

        const toChangeIndexes: { [key: string]: boolean } = {};
        for (let i = 0; i < data.length; i++) {
            if (!this.useHeatBackground) {
                data[i].PriceHeat = 0;
            } else if (data[i].PriceHeat !== 0) {
                stillAnimating = true;
            }
        }

        let toChange = Math.round(this.dataVolume / 10.0);
        if (updateAll) {
            toChange = data.length;
        } else {
            toChange = Math.floor(Math.random() * (data.length - 1 - 2)) + 2;
        }

        let sortingByPrice = false;
        for (let i = 0; i < grid.sortDescriptions.count; i++) {
            const field = grid.sortDescriptions.item(i).field;
            if (field === "Price" || field.indexOf("Change") >= 0) {
                sortingByPrice = true;
            }
        }

        let changing = false;
        let toChangeCount = 0;

        const now = Date.now();
        const elapsedTime = now - this.lastUpdateTime;
        const elapsedInterval = elapsedTime > this.frequency;
        if (elapsedInterval) {
            this.lastUpdateTime = now;
            for (let i = 0; i < toChange; i++) {
                const index = Math.floor(Math.random() * (data.length - 1));
                toChangeIndexes[index.toString()] = true;
                toChangeCount++;
                changing = true;
            }
        }

        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (toChangeIndexes[i.toString()] === true) {
                if (sortingByPrice && !useClear) {
                    grid.notifyRemoveItem(i, item);
                    this.randomizeDataValues(item);
                    grid.notifyInsertItem(i, item);
                } else {
                    this.randomizeDataValues(item);
                }

                if (this.useHeatBackground) {
                    if (item.Change > 0) {
                        item.PriceHeat = 1;
                    } else {
                        item.PriceHeat = -1;
                    }
                }
            } else {
                if (this.useHeatBackground) {
                    if (item.PriceHeat > 0) {
                        item.PriceHeat -= 0.06;
                        if (item.PriceHeat < 0) item.PriceHeat = 0;
                    }
                    if (item.PriceHeat < 0) {
                        item.PriceHeat += 0.06;
                        if (item.PriceHeat > 0) item.PriceHeat = 0;
                    }
                }
            }
        }

        if (sortingByPrice && useClear && elapsedInterval) {
            grid.actualDataSource.queueAutoRefresh();
        }

        if (!sortingByPrice || !elapsedInterval) {
            grid.invalidateVisibleRows();
        }

        setTimeout(() => this.onTimerTick(), this.frequency);
    }

    public randomizeDataValues(item: any): void {
        const rnd = parseFloat(Math.random().toFixed(2));
        const volatility = 2;
        let changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) changePercent -= 2 * volatility;
        const changeAmount = item.Price * (changePercent / 100);
        const newPrice = item.Price + changeAmount;
        item.Change = changeAmount;
        item.Price = Math.round(newPrice * 100) / 100;
        item.ChangePercent = Math.round(changePercent * 100) / 100;
    }

    public onGridGroupingRemove(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (!grid) return;
        grid.groupDescriptions.clear();
    }

    public onGridGroupingAdd(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        if (!grid) return;

        const fields = ["Category", "Type", "Contract"];
        for (const f of fields) {
            const g = new IgcColumnGroupDescription();
            g.field = f;
            g.sortDirection = ListSortDirection.Descending;
            grid.groupDescriptions.add(g);
        }
    }
    //end eventHandler
}
