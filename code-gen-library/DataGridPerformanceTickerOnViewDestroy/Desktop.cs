//begin imports
using System;
//end imports

//begin eventHandler
/// <summary>Stops the sample's ticker when its view is torn down; started again if the view is.</summary>
//WPF: System.Action
public void DataGridPerformanceTickerOnViewDestroy()
{
    CodeGenHelper.GetSharedSupporting<DataGridPerformanceTicker>("DataGridPerformanceTicker").Stop();
}
//end eventHandler
