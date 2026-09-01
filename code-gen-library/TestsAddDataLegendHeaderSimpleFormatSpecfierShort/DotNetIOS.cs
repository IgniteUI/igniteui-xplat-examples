//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAddDataLegendHeaderSimpleFormatSpecfierShort
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddDataLegendHeaderSimpleFormatSpecfierShort(){
        var legend = CodeGenHelper.GetDescription<DataLegendView>("secondary");
       legend.HeaderFormatSpecifiers = new object[1] {
			new DateTimeFormatSpecifier()
			{
				Locale = "en-US",
				DateStyle = "short"
			}
		};
    }
    //end eventHandler

}