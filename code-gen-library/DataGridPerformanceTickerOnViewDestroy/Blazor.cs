//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

//begin eventHandler
/// <summary>Stops the sample's ticker when its view is torn down; started again if the view is.</summary>
public void DataGridPerformanceTickerOnViewDestroy()
{
    CodeGenHelper.GetSharedSupporting<DataGridPerformanceTicker>("DataGridPerformanceTicker").Stop();
}
//end eventHandler
