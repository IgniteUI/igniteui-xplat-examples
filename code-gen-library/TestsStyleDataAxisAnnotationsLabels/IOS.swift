//begin imports
import Foundation
import UIKit   // If using SwiftUI instead, see the note at the end.
import CoreGraphics
//end imports

public class TestsStyleDataAxisAnnotationsLabels {
    
    public func testsStyleDataAxisAnnotationsLabels(_ sender: Any?, _ args: DataAnnotationInfo) {
        guard let value = CodeGenHelper.findByName(Any.self, "AxisAnnotationStlingOtions") else {
            return
        }

        let parser = JsonDictionaryParser()
        let array = parser.parse(json_: (value as! JsonDictionaryValue).value as! String) as! JsonDictionaryArray

        for i in 0..<array.items!.count {
            let item = array.items![i] as! JsonDictionaryObject
            let index = numberValue(item["Index"]) ?? -1
            if index == -1 || index == args.dataIndex {
                styleShape(item, args)
                return
            }
        }
    }

    private func styleShape(_ options: JsonDictionaryObject, _ args: DataAnnotationInfo) {
        let background = stringValue(options["Background"])
        if let background, !background.isEmpty {
            args.background = brush(from: background)
        }

        let borderColor = stringValue(options["BorderColor"])
        if let borderColor, !borderColor.isEmpty {
            args.borderColor = brush(from: borderColor)
        }

        let textColor = stringValue(options["TextColor"])
        if let textColor, !textColor.isEmpty {
            args.textColor = brush(from: textColor)
        }

        let borderThickness = stringValue(options["BorderThickness"])
        if borderThickness != "NaN", let value = numberValue(options["BorderThickness"]) {
            args.borderThickness = value
        }

        let borderRadius = stringValue(options["BorderRadius"])
        if borderRadius != "NaN", let value = numberValue(options["BorderRadius"]) {
            args.borderRadius = value
        }

        let xAxisLabel = stringValue(options["XAxisLabel"])
        if let xAxisLabel, !xAxisLabel.isEmpty {
            args.xAxisLabel = xAxisLabel
        }

        let yAxisLabel = stringValue(options["YAxisLabel"])
        if let yAxisLabel, !yAxisLabel.isEmpty {
            args.yAxisLabel = yAxisLabel
        }
    }

    private func brush(from color: String) -> Brush? {
        guard !color.isEmpty else {
            return nil
        }

        let brush = Brush()
        let parsedColor = Color()
        parsedColor.colorString = color
        brush.color = parsedColor
        return brush
    }

    private func stringValue(_ value: Any?) -> String? {
        switch value {
        case let jsonValue as JsonDictionaryValue:
            if let string = jsonValue.value as? String {
                return string
            }
            if let number = jsonValue.value as? NSNumber {
                return number.stringValue
            }
            return nil
        default:
            return nil
        }
    }

    private func numberValue(_ value: Any?) -> Double? {
        switch value {
        case let jsonValue as JsonDictionaryValue:
            if let number = jsonValue.value as? NSNumber {
                return number.doubleValue
            }
            if let doubleValue = jsonValue.value as? Double {
                return doubleValue
            }
            if let string = jsonValue.value as? String {
                return Double(string)
            }
            return nil
        default:
            return nil
        }
    }
}
