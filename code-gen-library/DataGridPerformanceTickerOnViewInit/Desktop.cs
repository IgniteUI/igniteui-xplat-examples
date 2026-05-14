//begin imports
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Infragistics.Controls.Grids;
//end imports

public class DataGridPerformanceTickerOnViewInit
{
    //begin eventHandler
    public DateTime LastDataUpdate = DateTime.Now;
    public int Interval = 100;
    public int TimerStep = 16;
    public bool IsTimerTicking = false;
    public Random Random = new Random();
    public int ToChangePerInterval = 200;

    //WPF: System.Action
    public void DataGridPerformanceTickerOnViewInit()
    {
        StartTicking();
    }

    public void StartTicking()
    {
        if (!IsTimerTicking)
        {
            IsTimerTicking = true;
            Task.Delay(TimerStep).ContinueWith((t) => OnTimerTick());
        }
    }

    public void OnTimerTick()
    {
        if (!IsTimerTicking) return;

        var grid = CodeGenHelper.GetDescription<XamDataGrid>("content");
        if (grid == null)
        {
            Task.Delay(TimerStep).ContinueWith((t) => OnTimerTick());
            return;
        }

        var data = grid.ItemsSource as List<SalesPerson>;
        if (data == null)
        {
            Task.Delay(TimerStep).ContinueWith((t) => OnTimerTick());
            return;
        }

        var now = DateTime.Now;
        var intervalElapsed = (now - LastDataUpdate).TotalMilliseconds > Interval;

        var toChangeIndexes = new Dictionary<int, bool>();
        var useClear = false;

        var sortingByAvgSale = false;
        for (var i = 0; i < grid.SortDescriptions.Count; i++)
        {
            if (grid.SortDescriptions[i].Field == "AvgSale" ||
                grid.SortDescriptions[i].Field.Contains("Change"))
            {
                sortingByAvgSale = true;
            }
        }

        if (intervalElapsed)
        {
            LastDataUpdate = now;
            for (var i = 0; i < ToChangePerInterval; i++)
            {
                var index = (int)Math.Round(Random.NextDouble() * data.Count - 1);
                while (toChangeIndexes.ContainsKey(index))
                {
                    index = (int)Math.Round(Random.NextDouble() * data.Count - 1);
                }
                toChangeIndexes[index] = true;
            }
        }

        for (var i = 0; i < data.Count; i++)
        {
            var item = data[i];
            if (toChangeIndexes.ContainsKey(i))
            {
                if (sortingByAvgSale && !useClear)
                {
                    grid.NotifyRemoveItem(i, item);
                    var oldItem = item;
                    RandomizeItem(item);
                    grid.NotifyInsertItem(i, item);
                }
                else
                {
                    var oldItem = item;
                    RandomizeItem(item);
                    grid.NotifySetItem(i, oldItem, item);
                }

                if (item.Change > 0)
                {
                    item.AvgSaleHeat = 1;
                }
                else
                {
                    item.AvgSaleHeat = -1;
                }
            }
            else
            {
                if (item.AvgSaleHeat > 0)
                {
                    item.AvgSaleHeat -= .06;
                    if (item.AvgSaleHeat < 0) item.AvgSaleHeat = 0;
                }
                if (item.AvgSaleHeat < 0)
                {
                    item.AvgSaleHeat += .06;
                    if (item.AvgSaleHeat > 0) item.AvgSaleHeat = 0;
                }
            }
        }

        if (!sortingByAvgSale || !intervalElapsed)
        {
            grid.InvalidateVisibleRows();
        }

        Task.Delay(TimerStep).ContinueWith((t) => OnTimerTick());
    }

    public void RandomizeItem(SalesPerson item)
    {
        item.Change = Random.NextDouble() * 40.0 - 20.0;
        var prevSale = item.AvgSale;
        item.AvgSale += item.Change;
        item.PercentChange = (item.AvgSale / prevSale) * 100.0;
    }
    //end eventHandler
}
