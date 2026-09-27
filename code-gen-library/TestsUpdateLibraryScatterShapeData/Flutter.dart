//begin imports
import "package:igniteui_flutter_core/src/ArrayList.dart" show ArrayList;
import "package:igniteui_flutter_core/src/Dictionary\$2.dart" show Dictionary$2;
import "package:igniteui_flutter_core/src/JsonDictionaryArray.dart" show JsonDictionaryArray;
import "package:igniteui_flutter_core/src/JsonDictionaryItem.dart" show JsonDictionaryItem;
import "package:igniteui_flutter_core/src/JsonDictionaryObject.dart" show JsonDictionaryObject;
import "package:igniteui_flutter_core/src/JsonDictionaryValue.dart" show JsonDictionaryValue;
import "package:igniteui_flutter_core/src/type.dart" show Base, String_$type;
//end imports
//begin eventHandler
// The other platforms decide the element's type by reflection and build one of
// it, falling back to a plain map when they cannot. Dart has no runtime
// construction from a type, so it takes that fallback every time: the rows go in
// as dictionaries, which is a shape the data source already reads -- the same
// one objectToDictionary hands back for an item the test host has to describe.
Object? testsUpdateLibraryScatterShapeData(ArrayList<Object?>? origData, JsonDictionaryObject? options) {
    var updateType = options == null ? null : options.getString("updateType");
    switch (updateType) {
        case "addItems":
            return _addItems(origData, options![("newData")]);
        case "removeItems":
            return _removeItems(origData, options![("indexes")]);
    }
    return null;
}

Object? _removeItems(ArrayList<Object?>? origData, Object? itemsToRemove) {
    if (origData == null) {
        return origData;
    }
    if (itemsToRemove is JsonDictionaryArray) {
        var items = itemsToRemove.items;
        if (items != null) {
            for (var i = 0; i < items.length; i++) {
                var index = _intValue(items[i]);
                if (index != null && index >= 0 && index < origData.length) {
                    origData.removeAt(index);
                }
            }
        }
    } else {
        var index = _intValue(itemsToRemove);
        if (index != null && index >= 0 && index < origData.length) {
            origData.removeAt(index);
        }
    }
    return origData;
}

Object? _addItems(ArrayList<Object?>? origData, Object? newData) {
    if (origData == null) {
        return origData;
    }
    if (newData is JsonDictionaryArray) {
        var items = newData.items;
        if (items != null) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item is JsonDictionaryObject) {
                    origData.add(_createMapObject(item));
                }
            }
        }
    } else if (newData is JsonDictionaryObject) {
        origData.add(_createMapObject(newData));
    }
    return origData;
}

Dictionary$2<String?, Object?> _createMapObject(JsonDictionaryObject jObject) {
    var ret = new Dictionary$2<String?, Object?>(String_$type, Base.$t);
    var keys = jObject.getKeys();
    if (keys != null) {
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key == null) {
                continue;
            }
            if (key == "Points") {
                ret.addItem(key, _createPointsCollection(jObject[key] as JsonDictionaryArray?));
            } else {
                ret.addItem(key, jObject.getNumber(key));
            }
        }
    }
    return ret;
}

ArrayList<Object?> _createPointsCollection(JsonDictionaryArray? pointsArray) {
    var points = new ArrayList<Object?>();
    var items = pointsArray == null ? null : pointsArray.items;
    if (items != null) {
        for (var i = 0; i < items.length; i++) {
            var pointObject = items[i];
            if (pointObject is! JsonDictionaryObject) {
                continue;
            }
            var point = new Dictionary$2<String?, Object?>(String_$type, Base.$t);
            point.addItem("X", pointObject.getNumber("X"));
            point.addItem("Y", pointObject.getNumber("Y"));
            points.add(point);
        }
    }
    return points;
}

int? _intValue(Object? item) {
    if (item is JsonDictionaryValue) {
        var v = item.value;
        if (v is num) {
            return v.toInt();
        }
        if (v != null) {
            return int.tryParse(v.toString());
        }
        return null;
    }
    if (item is num) {
        return item.toInt();
    }
    return null;
}
//end eventHandler
