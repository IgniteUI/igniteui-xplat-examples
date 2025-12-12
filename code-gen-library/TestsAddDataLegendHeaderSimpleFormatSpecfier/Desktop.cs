//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAddDataLegendHeaderSimpleFormatSpecfier
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddDataLegendHeaderSimpleFormatSpecfier(){
        var legend = CodeGenHelper.GetDescription<XamDataLegend>("secondary");
       legend.HeaderFormatSpecifiers = new object[1] {
			new DateTimeFormatSpecifier()
			{
				Locale = "en-US",
				DateStyle = "long"
			}
		};
    }
    //end eventHandler

}