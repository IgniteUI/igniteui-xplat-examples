//begin imports
using System;
//end imports

//begin eventHandler
/// <summary>Starts the sample's ticker once its grid is in place.</summary>
//WPF: System.Action
public void DataGridPerformanceTickerOnViewInit()
{
    CodeGenHelper.GetSharedSupporting<DataGridPerformanceTicker>("DataGridPerformanceTicker").Start();
}
//end eventHandler
