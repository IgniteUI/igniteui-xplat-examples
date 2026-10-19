//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Threading.Tasks;
//end imports

public class DataGridLiveDataTickerOnViewInit
{
    //begin eventHandler
    public DateTime LastUpdateTime = new DateTime();
    public int Frequency = 1000;
    public int DataVolume = 500;
    public bool IsTimerTicking = false;
    public bool IsUpdatingAllPrices = false;
    public bool IsUpdatingSomePrices = false;
    public bool UseHeatBackground = true;
    public bool UseRowGrouping = true;
    public Random Random = new Random();

    public void DataGridLiveDataTickerOnViewInit()
    {
        OnGridGroupingAdd();
    }

    public void StopTicking()
    {
        if (IsTimerTicking)
        {
            IsTimerTicking = false;
        }
    }

    public void StartTicking()
    {
        if (!IsTimerTicking)
        {
            IsTimerTicking = true;
            Task.Delay(Frequency).ContinueWith((t) => OnTimerTick());
        }
    }

    public void OnTimerTick()
    {
        if (!IsTimerTicking) return;

        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        if (grid == null)
        {
            Task.Delay(Frequency).ContinueWith((t) => OnTimerTick());
            return;
        }

        var data = grid.DataSource as List<PortfolioDataItem>;
        if (data == null)
        {
            Task.Delay(Frequency).ContinueWith((t) => OnTimerTick());
            return;
        }

        var stillAnimating = false;
        var useClear = IsUpdatingAllPrices;
        var updateAll = IsUpdatingAllPrices;

        var toChangeIndexes = new List<bool>();
        foreach (var item in data)
        {
            toChangeIndexes.Add(false);
            if (!UseHeatBackground)
            {
                item.PriceHeat = 0;
            }
            else if (item.PriceHeat != 0)
            {
                stillAnimating = true;
            }
        }

        var toChange = (int)Math.Round(DataVolume / 10.0);
        if (updateAll)
        {
            toChange = data.Count;
        }
        else
        {
            toChange = (int)(Random.Next(2, data.Count - 1));
        }

        var sortingByPrice = false;
        for (var i = 0; i < grid.SortDescriptions.Count; i++)
        {
            if (grid.SortDescriptions[i].Field == "Price" ||
                grid.SortDescriptions[i].Field.Contains("Change"))
            {
                sortingByPrice = true;
            }
        }

        var changing = false;
        var toChangeCount = 0;

        var now = DateTime.Now;
        var elapsedTime = now.Subtract(LastUpdateTime);
        var elapsedInterval = elapsedTime.TotalMilliseconds > Frequency;
        if (elapsedInterval)
        {
            LastUpdateTime = DateTime.Now;
            for (var i = 0; i < toChange; i++)
            {
                var index = (int)(Random.Next(0, data.Count - 1));
                toChangeIndexes[index] = true;
                toChangeCount++;
                changing = true;
            }
        }

        for (var i = 0; i < data.Count; i++)
        {
            var item = data[i];
            if (toChangeIndexes[i] == true)
            {
                if (sortingByPrice && !useClear)
                {
                    grid.NotifyRemoveItem(data, i, item);
                    PortfolioData.RandomizeDataValues(item);
                    grid.NotifyInsertItem(data, i, item);
                }
                else
                {
                    PortfolioData.RandomizeDataValues(item);
                    grid.NotifyUpdateItem(data, i, item, true);
                }

                if (UseHeatBackground)
                {
                    if (item.Change > 0)
                    {
                        item.PriceHeat = 1;
                    }
                    else
                    {
                        item.PriceHeat = -1;
                    }
                }
            }
            else
            {
                if (UseHeatBackground)
                {
                    if (item.PriceHeat > 0)
                    {
                        item.PriceHeat -= .06;
                        if (item.PriceHeat < 0) item.PriceHeat = 0;
                    }
                    if (item.PriceHeat < 0)
                    {
                        item.PriceHeat += .06;
                        if (item.PriceHeat > 0) item.PriceHeat = 0;
                    }
                }
            }
        }

        if (sortingByPrice && useClear && elapsedInterval)
        {
            grid.NotifyClearItems(data);
        }
        else if (useClear)
        {
            grid.NotifyClearItems(data);
        }

        if (!sortingByPrice || !elapsedInterval)
        {
            grid.InvalidateVisibleRows();
        }

        Task.Delay(Frequency).ContinueWith((t) => OnTimerTick());
    }

    public void OnGridGroupingRemove()
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        if (grid == null) return;
        grid.GroupDescriptions.Clear();
        grid.Flush();
    }

    public void OnGridGroupingAdd()
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        if (grid == null) return;

        var g = new IgbColumnGroupDescription();
        g.Field = "Category";
        g.SortDirection = ListSortDirection.Descending;
        grid.GroupDescriptions.Add(g);

        g = new IgbColumnGroupDescription();
        g.Field = "Type";
        g.SortDirection = ListSortDirection.Descending;
        grid.GroupDescriptions.Add(g);

        g = new IgbColumnGroupDescription();
        g.Field = "Contract";
        g.SortDirection = ListSortDirection.Descending;
        grid.GroupDescriptions.Add(g);
    }
    //end eventHandler
}
