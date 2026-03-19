//begin imports
import Foundation
import UIKit   // If using SwiftUI instead, see the note at the end.
import CoreGraphics
//end imports

public class TestsStyleDataAnnotationsShapes
{
    //begin eventHandler
   
    public func testsStyleDataAnnotationsShapes(sender Any?, args DataAnnotationItem?)
    {         
         var o = CodeGenHelper.FindByName<object>("DataAnnotationShapeStylingOptions");
		 if (o == null) return;
		 var parser = JsonDictionaryParser();
		 let array = parser.parse(json_:((o as JsonDictionaryValue).value as! String)) as! JsonDictionaryArray;
		 for i in 0..<array.items!.count {
		 
			 var item = (JObject) array[i];
			 let item = array.items![i] as! JsonDictionaryObject;
			 let index = (item["Index"] as! JsonDictionaryValue).value as! Double); 
			 if (index == -1)
			 {
				 styleShape(item,args);
				 return;
			 }
			 if (index == args.DataIndex)
			 {
				 styleShape(item,args);
				 return;
			 }
		 }
    }

	private func styleShape(options JsonDictionaryObject?, args DataAnnotationItem?)
	{
		let brush =  (options["Brush"] as! JsonDictionaryValue).value as! String); 
		if let brush, !brush.isEmpty {
				args.ShapeBrush = getBrush(brush);
		}
		let outlineBrush =  (options["OutlineBrush"] as! JsonDictionaryValue).value as! String); 
		if let outlineBrush, !outlineBrush.isEmpty {
				args.ShapeOutline = getBrush(outlineBrush);
		}
		let thickness =  (options["Thickness"] as! JsonDictionaryValue).value as! String); 
		var Thickness = options["Thickness"].Value<string>();
		if (thickness != "NaN"){
				let t =  (options["Thickness"] as! JsonDictionaryValue).value as! Double);
				args.ShapeThickness = t;
		}
		
	}
	private IgsBrush GetBrush(string color)
	{
		if let color, !color.isEmpty {		
			let c = colorFromHtml(color);
			return IgsSolidColorBrush(c);
		}
		return null;

	}
    //end eventHandler
}