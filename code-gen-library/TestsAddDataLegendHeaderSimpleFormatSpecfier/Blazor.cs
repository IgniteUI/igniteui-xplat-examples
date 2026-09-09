//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class TestsAddDataLegendHeaderSimpleFormatSpecfier
{

    //begin eventHandler
    //WPF: System.Action
    public void TestsAddDataLegendHeaderSimpleFormatSpecfier()
    {
        var legend = CodeGenHelper.GetDescription<IgbDataLegend>("secondary");
        legend.HeaderFormatSpecifiers.Add(new IgbDateTimeFormatSpecifier()
        {
            Locale = "en-US",
            DateStyle = "long"
        });
    }
    //end eventHandler

}
