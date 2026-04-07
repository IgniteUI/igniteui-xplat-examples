//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
using Infragistics.Portable.Description;
//end imports

public class TestsUpdateValueLayerPrecisionInSeriesAddedEvent
{
    //begin eventHandler
    //GTK: Infragistics.Controls.Charts.ChartSeriesEventHandler 
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
