//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAddDataLegendHeaderFormatSpecfierLongWeekday
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddDataLegendHeaderFormatSpecfierLongWeekday(){
		// TODO: lond weekday cannot currently be set in WPF

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