//begin imports
import com.infragistics.mobile.controls.DataAnnotationItem
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryParser
import com.infragistics.mobile.controls.IgaBrush
//end imports

import com.infragistics.mo
bile.controls.CodeGenHelper

public class TestsStyleDataAnnotationsShapes
{
    //begin eventHandler
    //Kotlin: Action
	public fun testsStyleDataAnnotationsShapes(sender: Any?,args: DataAnnotationItem)
    {         
		val o = CodeGenHelper.FindByName<Any>("DataAnnotationShapeStylingOptions") ?: return
       
        var parser = JsonDictionaryParser();
		val array = parser.parse(((o as JsonDictionaryValue).value as String)) as JsonDictionaryArray;
     
		for (i in 0 until array.items!!.size) {
            val item = array.Items[i] as JsonDictionaryObject;
			val index = (item["Index"] as JsonDictionaryValue).value as Double;
            if (index == -1)
			 {
				 styleShape(item,args);
				 return;
			 }
			 if (index == args.dataIndex)
			 {
				 styleShape(item,args);
				 return;
			 }
		 }
    }

	private fun styleShape(options: JsonDictionaryObject,args: DataAnnotationItem)
	{
		val brush = (options["Brush"] as JsonDictionaryValue).value as? String;		
		if (brush != null){
				args.shapeBrush = getBrush(brush);
		}
		val outlineBrush = (options["OutlineBrush"] as JsonDictionaryValue).value as? String;
		if (outlineBrush != null){
				args.shapeOutline = GetBrush(outlineBrush);
		}
		val thickness = (options["Thickness"] as JsonDictionaryValue).value as? String;
		
		if (thickness != "NaN"){
				args.shapeThickness = (options["Thickness"] as JsonDictionaryValue).value as? Double;
		}
		
	}
    private IgaBrush GetBrush(string color)
    {
        if (color == null || color == ""){
            return null;
		}
        
        val colorInt = Color.parseColor(color)
        return igaBrush(colorInt);
        

    }
    //end eventHandler
}