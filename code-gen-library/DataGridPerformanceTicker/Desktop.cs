//begin imports
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Infragistics.Controls.Grids;
//end imports

//begin supportingTypes
/// <summary>
/// Keeps the performance grid's sales figures changing: every tick it picks rows to change, at most as
/// many as the grid has, and refreshes the rest. Started when the sample's view is ready and stopped when it
/// is torn down, so a page shows one ticker and never one left from a page before it.
/// </summary>
public class DataGridPerformanceTicker
{
    public DateTime LastDataUpdate = DateTime.Now;
    public int Interval = 100;
    public int TimerStep = 16;
    public bool IsTimerTicking = false;
    public Random Random = new Random();
    public int ToChangePerInterval = 200;

    public void Start()
    {
        StartTicking();
    }

    public void Stop()
    {
        IsTimerTicking = false;
        _generation++;
    }

    private int _generation = 0;

    // A tick belongs to the start that scheduled it, so a stop and a restart in quick succession leave one
    // ticking loop rather than two.
    private void ScheduleTick()
    {
        var generation = _generation;
        Task.Delay(TimerStep).ContinueWith((t) =>
        {
            if (generation == _generation)
            {
                OnTimerTick();
            }
        }, TaskScheduler.FromCurrentSynchronizationContext());
    }

    public void StartTicking()
    {
        if (!IsTimerTicking)
        {
            IsTimerTicking = true;
            ScheduleTick();
        }
    }

    public void OnTimerTick()
    {
        if (!IsTimerTicking) return;

        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        if (grid == null)
        {
            ScheduleTick();
            return;
        }

        var data = grid.ItemsSource as List<SalesPerson>;
        if (data == null)
        {
            ScheduleTick();
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
            var toChange = Math.Min(ToChangePerInterval, data.Count);
            for (var i = 0; i < toChange; i++)
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

        ScheduleTick();
    }

    public void RandomizeItem(SalesPerson item)
    {
        item.Change = Random.NextDouble() * 40.0 - 20.0;
        var prevSale = item.AvgSale;
        item.AvgSale += item.Change;
        item.PercentChange = (item.AvgSale / prevSale) * 100.0;
    }
    }
//end supportingTypes
