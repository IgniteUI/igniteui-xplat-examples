//begin imports
using Infragistics.Controls.Charts;
using Newtonsoft.Json.Linq;
using Infragistics.Win.Description;
//end imports

public class TestsUpdateValueLayerPrecisionInSeriesAddedEvent
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.ChartSeriesEventHandler 
    public void TestsUpdateValueLayerPrecisionInSeriesAddedEvent(object sender, ChartSeriesEventArgs args)
    {
        JsonDictionaryParser parser = new JsonDictionaryParser();
        object o = CodeGenHelper.FindByName<object>("SeriesAddedValueLayerPrecision");
        var obj = (JsonDictionaryObject)parser.Parse((string)((JsonDictionaryValue)o).Value);
		int precision = (int)(double)(obj["precision"] as JsonDictionaryValue).Value;
		if (args.Series is ValueLayer)
		{
				 ValueLayer layer = args.Series as ValueLayer;
				 layer.YAxisAnnotationInterpolatedValuePrecision = precision;
				   
		}
    }
    //end eventHandler
}