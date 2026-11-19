//begin imports
using System;
using System.Collections.Generic;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Data;
using Infragistics.Controls.Charts;
using Infragistics.Portable.Description;
using Newtonsoft.Json;
//end imports

public class TestsDoughnutTooltips
{
    //begin eventHandler
    //WinUI: System.Action
    public void TestsDoughnutTooltips()
    {
        var data = CodeGenHelper.FindByName<JsonDictionaryValue>("TestsDoughnutTooltipBindings");
        var json = data == null ? null : data.Value as string;
        if (string.IsNullOrEmpty(json)) throw new InvalidOperationException("Doughnut tooltip bindings were not provided");
        var bindings = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
        foreach (var entry in bindings)
        {
            var series = CodeGenHelper.FindByName<RingSeries>(entry.Key);
            if (series == null) throw new InvalidOperationException("Missing tooltip series: " + entry.Key);
            if (entry.Value == null)
            {
                series.ChartToolTipUpdating -= UpdateDoughnutTooltip;
                continue;
            }
            if (entry.Value != "Value" && entry.Value != "Label")
                throw new InvalidOperationException("Unsupported doughnut tooltip member: " + entry.Value);
            series.Tag = entry.Value;
            series.ChartToolTipUpdating -= UpdateDoughnutTooltip;
            series.ChartToolTipUpdating += UpdateDoughnutTooltip;
        }
    }
    private void UpdateDoughnutTooltip(object sender, ChartToolTipUpdatingEventArgs args)
    {
        var series = (RingSeries)sender;
        var text = args.CurrentView as TextBlock ?? new TextBlock();
        var member = (string)series.Tag;
        var path = member == "Label" ? "ItemLabel" : "Item[" + series.ValueMemberPath + "]";
        text.DataContext = args.CurrentData;
        text.SetBinding(TextBlock.TextProperty, new Binding { Path = new PropertyPath(path) });
        args.CurrentView = text;
    }
    //end eventHandler
}
