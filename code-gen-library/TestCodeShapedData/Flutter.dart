//begin data
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them. A data item defined in
// code keeps its own casing across platforms -- only the items generated from
// XPLAT.json are camelized -- and these are the names the member paths in the
// descriptions ask for. The Dart fields are camelCase, as Dart wants them.
class TestCodeShapedDataItem implements IReflectable, IReflectableSet {
    String? name = null;
    double value = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Name":
                return this.name;
            case "Value":
                return this.value;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Name":
                this.name = value as String?;
                break;
            case "Value":
                this.value = (value as num).toDouble();
                break;
        }
    }
}

class TestCodeShapedData extends ArrayList<TestCodeShapedDataItem?> {
    TestCodeShapedData() {
        this.add((TestCodeShapedDataItem()
            ..name = "first"
            ..value = 1
        ));
        this.add((TestCodeShapedDataItem()
            ..name = "second"
            ..value = 2
        ));
    }
}
//end data
