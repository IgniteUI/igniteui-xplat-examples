//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class TestsAddDataLegendHeaderFormatSpecfierLongWeekday
{

    //begin eventHandler
    //WPF: System.Action
    public void TestsAddDataLegendHeaderFormatSpecfierLongWeekday()
    {
        // TODO: long weekday cannot currently be set here (matches the Desktop/Web ports), so this
        // uses dateStyle "short" -- kept in parity with the other platforms until the API supports it.
        var legend = CodeGenHelper.GetDescription<IgbDataLegend>("secondary");
        legend.HeaderFormatSpecifiers.Add(new IgbDateTimeFormatSpecifier()
        {
            Locale = "en-US",
            DateStyle = "short"
        });
    }
    //end eventHandler

}
