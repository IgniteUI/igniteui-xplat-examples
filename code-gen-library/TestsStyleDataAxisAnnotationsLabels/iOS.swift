//begin imports
import Foundation
import UIKit
import CoreGraphics
//end imports

public class TestsStyleDataAxisAnnotationsLabels {
    //begin eventHandler
    //Swift: IgsDataAnnotationInfo
    public func testsStyleDataAxisAnnotationsLabels(sender: Any?, args: IgsDataAnnotationInfo?) {
        guard let args = args else { return }
        guard let value = CodeGenHelper.findByName(Any.self, "AxisAnnotationStlingOtions") else { return }

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

    private func styleShape(_ options: JsonDictionaryObject, _ args: IgsDataAnnotationInfo) {
        let background = stringValue(options["Background"])
        if let background = background, !background.isEmpty {
            args.background = IgsBrush.fromColorString(background)
        }

        let borderColor = stringValue(options["BorderColor"])
        if let borderColor = borderColor, !borderColor.isEmpty {
            args.borderColor = IgsBrush.fromColorString(borderColor)
        }

        let textColor = stringValue(options["TextColor"])
        if let textColor = textColor, !textColor.isEmpty {
            args.textColor = IgsBrush.fromColorString(textColor)
        }

        let borderThickness = stringValue(options["BorderThickness"])
        if let borderThickness = borderThickness, borderThickness != "NaN", let value = Double(borderThickness) {
            args.borderThickness = value
        }

        let borderRadius = stringValue(options["BorderRadius"])
        if let borderRadius = borderRadius, borderRadius != "NaN", let value = Double(borderRadius) {
            args.borderRadius = value
        }

        let xAxisLabel = stringValue(options["XAxisLabel"])
        if let xAxisLabel = xAxisLabel, !xAxisLabel.isEmpty {
            args.xAxisLabel = xAxisLabel
        }

        let yAxisLabel = stringValue(options["YAxisLabel"])
        if let yAxisLabel = yAxisLabel, !yAxisLabel.isEmpty {
            args.yAxisLabel = yAxisLabel
        }
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
    //end eventHandler
}
