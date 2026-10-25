//begin data
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them -- see TestCodeShapedData.
class TestRegionedDataItem implements IReflectable, IReflectableSet {
    String? name = null;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Name":
                return this.name;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Name":
                this.name = value as String?;
                break;
        }
    }
}

//begin TestRegionedLookup
class TestRegionedLookup {
    static List<String> names() {
        return <String>["first", "second"];
    }
}
//end TestRegionedLookup
//begin TestRegionedRows
class TestRegionedData extends ArrayList<TestRegionedDataItem?> {
    TestRegionedData() {
        for (var name in TestRegionedLookup.names()) {
            this.add((TestRegionedDataItem()..name = name));
        }
    }
}
//end TestRegionedRows
//end data
