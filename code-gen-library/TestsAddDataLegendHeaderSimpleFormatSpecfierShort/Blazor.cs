//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class TestsAddDataLegendHeaderSimpleFormatSpecfierShort
{

    //begin eventHandler
    //WPF: System.Action
    public void TestsAddDataLegendHeaderSimpleFormatSpecfierShort()
    {
        var legend = CodeGenHelper.GetDescription<IgbDataLegend>("secondary");
        legend.HeaderFormatSpecifiers.Add(new IgbDateTimeFormatSpecifier()
        {
            Locale = "en-US",
            DateStyle = "short"
        });
    }
    //end eventHandler

}
