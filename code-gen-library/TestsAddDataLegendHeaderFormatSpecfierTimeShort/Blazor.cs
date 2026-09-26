//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class TestsAddDataLegendHeaderFormatSpecfierTimeShort
{

    //begin eventHandler
    //WPF: System.Action
    public void TestsAddDataLegendHeaderFormatSpecfierTimeShort()
    {
        var legend = CodeGenHelper.GetDescription<IgbDataLegend>("secondary");
        legend.HeaderFormatSpecifiers.Add(new IgbDateTimeFormatSpecifier()
        {
            Locale = "en-US",
            TimeStyle = "short"
        });
    }
    //end eventHandler

}
