//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
//end imports

public class TestsUpdateValueLayerPrecisionInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler 
    public void TestsUpdateValueLayerPrecisionInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {		
        object o = CodeGenHelper.FindByName<object>("SeriesAddedValueLayerPrecision");
        JObject obj =  JObject.Parse(o.ToString());
		int precision = obj["precision"].ToObject<int>();
		if (args.Series is ValueLayer)
		{
				 ValueLayer layer = args.Series as ValueLayer;
				 layer.YAxisAnnotationInterpolatedValuePrecision = precision;
				   
		}
    }
    //end eventHandler
}
