//begin imports
import Foundation
import CoreGraphics
//end imports

public class TestsUpdateLibraryScatterShapeData {

    //begin eventHandler
    //Swift: ([Any], JsonDictionaryObject) -> Any?
    public init() {
    }

    public func testsUpdateLibraryScatterShapeData(_ origData: NSMutableArray, _ options: JsonDictionaryObject) -> Any? {
        let updateType = (options["updateType"] as? JsonDictionaryValue)?.value as? String ?? ""

        switch updateType {
        case "addItems":
            return addItems(origData, options["newData"])
        case "removeItems":
            return removeItems(origData, options["indexes"])
        default:
            return nil
        }
    }

    private func removeItems(_ origData: NSMutableArray, _ itemsToRemove: Any?) -> Any? {
        if let jArray = itemsToRemove as? JsonDictionaryArray {
            for item in jArray.items ?? [] {
                if let index = intValue(item), index >= 0, index < origData.count {
                    origData.removeObject(at: index)
                }
            }
        } else if let index = intValue(itemsToRemove), index >= 0, index < origData.count {
            origData.removeObject(at: index)
        }

        return origData
    }

    private func addItems(_ origData: NSMutableArray, _ newData: Any?) -> Any? {
        guard let elementType = getElementType(origData) else {
            return origData
        }

        if let jArray = newData as? JsonDictionaryArray {
            for item in jArray.items ?? [] {
                if let jObject = item as? JsonDictionaryObject,
                   let typedObject = getTypedObject(jObject, targetType: elementType) {
                    origData.add(typedObject)
                }
            }
        } else if let jObject = newData as? JsonDictionaryObject,
                  let typedObject = getTypedObject(jObject, targetType: elementType) {
            origData.add(typedObject)
        }

        return origData
    }

    private func getElementType(_ list: NSMutableArray) -> NSObject.Type? {
        if list.count > 0, let first = list[0] as? NSObject {
            return type(of: first)
        }

        return nil
    }

    private func getTypedObject(_ jObject: JsonDictionaryObject, targetType: NSObject.Type) -> NSObject? {
        let ret = targetType.init()

        for key in fromEn(t: Optional<String>.self, en: jObject.getKeys()) {
            guard let key else {
                continue
            }

            if key == "Points" {
                var points: [CGPoint] = []
                let pArr = jObject["Points"] as? JsonDictionaryArray
                for pItem in pArr?.items ?? [] {
                    guard let pObj = pItem as? JsonDictionaryObject else {
                        continue
                    }

                    let x = numberValue(pObj["X"]) ?? 0
                    let y = numberValue(pObj["Y"]) ?? 0
                    points.append(CGPoint(x: x, y: y))
                }

                ret.setValue(points, forKey: key)
            } else if let value = numberValue(jObject[key]) {
                ret.setValue(value, forKey: key)
            }
        }

        return ret
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
            if let intValue = jsonValue.value as? Int {
                return Double(intValue)
            }
            if let string = jsonValue.value as? String {
                return Double(string)
            }
            return nil
        case let number as NSNumber:
            return number.doubleValue
        case let doubleValue as Double:
            return doubleValue
        case let intValue as Int:
            return Double(intValue)
        case let string as String:
            return Double(string)
        default:
            return nil
        }
    }

    private func intValue(_ value: Any?) -> Int? {
        if let number = numberValue(value) {
            return Int(number)
        }

        return nil
    }
    //end eventHandler
}
