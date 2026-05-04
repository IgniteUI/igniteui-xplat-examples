//begin imports
import Foundation
import UIKit
import CoreGraphics
//end imports

public class TestsStyleDataAnnotationsShapes {
    //begin eventHandler
    //Swift: IgsDataAnnotationItem
    public func testsStyleDataAnnotationsShapes(sender: Any?, args: IgsDataAnnotationItem?) {
        guard let args = args else { return }
        guard let o = CodeGenHelper.findByName(Any.self, "DataAnnotationShapeStylingOptions") else { return }
        let parser = JsonDictionaryParser()
        let array = parser.parse(json_: ((o as! JsonDictionaryValue).value as! String)) as! JsonDictionaryArray
        for i in 0..<array.items!.count {
            let item = array.items![i] as! JsonDictionaryObject
            let index = Int((item["Index"] as! JsonDictionaryValue).value as! Double)
            if index == -1 {
                styleShape(item, args)
                return
            }
            if index == args.dataIndex {
                styleShape(item, args)
                return
            }
        }
    }

    private func styleShape(_ options: JsonDictionaryObject, _ args: IgsDataAnnotationItem) {
        let brush = (options["Brush"] as? JsonDictionaryValue)?.value as? String
        if let brush = brush, !brush.isEmpty {
            args.shapeBrush = IgsBrush.fromColorString(brush)
        }
        let outlineBrush = (options["OutlineBrush"] as? JsonDictionaryValue)?.value as? String
        if let outlineBrush = outlineBrush, !outlineBrush.isEmpty {
            args.shapeOutline = IgsBrush.fromColorString(outlineBrush)
        }
        if let rawThickness = (options["Thickness"] as? JsonDictionaryValue)?.value {
            if let t = rawThickness as? Double, !t.isNaN {
                args.shapeThickness = t
            } else if let s = rawThickness as? String, s != "NaN", let t = Double(s) {
                args.shapeThickness = t
            }
        }
    }
    //end eventHandler
}
