//begin imports
using System;
using System.Collections.Generic;
using System.Windows.Controls;
using System.Windows.Data;
using Infragistics.Controls.Charts;
using Infragistics.Controls.Description;
using Newtonsoft.Json;
//end imports

public class TestsDoughnutTooltips
{
    //begin eventHandler
    //WPF: System.Action
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
                series.ToolTip = null;
                continue;
            }
            if (entry.Value != "Value" && entry.Value != "Label")
                throw new InvalidOperationException("Unsupported doughnut tooltip member: " + entry.Value);
            var text = new TextBlock();
            var path = entry.Value == "Label" ? "ItemLabel" : "Item[" + series.ValueMemberPath + "]";
            text.SetBinding(TextBlock.TextProperty, new Binding(path));
            series.ToolTip = text;
        }
    }
    //end eventHandler
}
