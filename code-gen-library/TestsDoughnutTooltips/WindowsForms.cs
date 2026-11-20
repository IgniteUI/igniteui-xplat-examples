//begin imports
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using Infragistics.Win.DataVisualization;
using Infragistics.Win.Description;
using Newtonsoft.Json;
//end imports

public class TestsDoughnutTooltips
{
    //begin eventHandler
    private Dictionary<string, string> _tooltipMembers = new Dictionary<string, string>();

    //WindowsForms: System.Action
    public void TestsDoughnutTooltips()
    {
        var data = CodeGenHelper.FindByName<JsonDictionaryValue>("TestsDoughnutTooltipBindings");
        var json = data == null ? null : data.Value as string;
        if (string.IsNullOrEmpty(json)) throw new InvalidOperationException("Doughnut tooltip bindings were not provided");
        var bindings = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
        _tooltipMembers = bindings;
        foreach (var entry in bindings)
        {
            var series = CodeGenHelper.FindByName<RingSeries>(entry.Key);
            if (series == null) throw new InvalidOperationException("Missing tooltip series: " + entry.Key);
            if (entry.Value == null)
            {
                series.TooltipContentUpdating -= UpdateDoughnutTooltip;
                continue;
            }
            if (entry.Value != "Value" && entry.Value != "Label")
                throw new InvalidOperationException("Unsupported doughnut tooltip member: " + entry.Value);
            series.TooltipContentUpdating -= UpdateDoughnutTooltip;
            series.TooltipContentUpdating += UpdateDoughnutTooltip;
        }
    }
    private void UpdateDoughnutTooltip(object sender, DoughnutChartTooltipContentEventArgs args)
    {
        var series = (RingSeries)args.DataContext.RingSeries;
        var member = _tooltipMembers[series.Name];
        var value = member == "Label" ? (args.DataContext.IsOthersSlice ? series.OthersCategoryText : ReadDoughnutTooltipMember(args.DataContext.Item, series.LabelMemberPath)) :
            ReadDoughnutTooltipMember(args.DataContext.Item, series.ValueMemberPath);
        var label = args.CurrentContent as System.Windows.Forms.Label ?? new System.Windows.Forms.Label();
        label.AutoSize = true;
        label.Text = Convert.ToString(value, CultureInfo.InvariantCulture) ?? string.Empty;
        args.CurrentContent = label;
    }
    private object ReadDoughnutTooltipMember(object item, string member)
    {
        if (item is IDictionary<string, object> values && values.TryGetValue(member, out var value)) return value;
        if (item is IDictionary dictionary && dictionary.Contains(member)) return dictionary[member];
        var property = item == null ? null : TypeDescriptor.GetProperties(item)[member];
        if (property != null) return property.GetValue(item);
        throw new InvalidOperationException("Missing doughnut tooltip member: " + member);
    }
    //end eventHandler
}
