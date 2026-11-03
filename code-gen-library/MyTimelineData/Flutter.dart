//begin data
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class MyTimelineInfo implements IReflectable, IReflectableSet {
    int index = 0;
    double value = 0;
    String? label = null;
    String? details = null;
    // Kotlin parses this with SimpleDateFormat("yyyy-MM-dd"), which reads a bare
    // date in the local zone; DateTime.parse does the same for an ISO date with
    // no zone on it.
    DateTime? date = null;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Index":
                return this.index;
            case "Value":
                return this.value;
            case "Label":
                return this.label;
            case "Details":
                return this.details;
            case "Date":
                return this.date;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Index":
                this.index = (value as num).toInt();
                break;
            case "Value":
                this.value = (value as num).toDouble();
                break;
            case "Label":
                this.label = value as String?;
                break;
            case "Details":
                this.details = value as String?;
                break;
            case "Date":
                this.date = value as DateTime?;
                break;
        }
    }
}

class MyTimelineData extends ArrayList<MyTimelineInfo?> {
    MyTimelineData() {
        this.add(MyTimelineInfo()..index = 0..label = "0"..value = 10.0..date = DateTime.parse("2000-01-11"));
        this.add(MyTimelineInfo()..index = 1..label = "1"..value = 40.0..date = DateTime.parse("2000-01-12"));
        this.add(MyTimelineInfo()..index = 2..label = "2"..value = 20.0..date = DateTime.parse("2000-01-13"));
        this.add(MyTimelineInfo()..index = 3..label = "3"..value = 30.0..date = DateTime.parse("2000-01-14"));
    }
}
//end data
