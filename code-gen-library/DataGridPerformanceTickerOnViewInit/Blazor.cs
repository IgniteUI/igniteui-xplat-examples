//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

//begin eventHandler
/// <summary>Starts the sample's ticker once its grid is in place.</summary>
public void DataGridPerformanceTickerOnViewInit()
{
    CodeGenHelper.GetSharedSupporting<DataGridPerformanceTicker>("DataGridPerformanceTicker").Start();
}
//end eventHandler
