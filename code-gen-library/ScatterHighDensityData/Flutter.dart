//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class ScatterHighDensityItem implements IReflectable, IReflectableSet {
    double x = 0;
    double y = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "X":
                return this.x;
            case "Y":
                return this.y;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "X":
                this.x = (value as num).toDouble();
                break;
            case "Y":
                this.y = (value as num).toDouble();
                break;
        }
    }
}

class ScatterHighDensityData extends ArrayList<ScatterHighDensityItem?> {
    static math.Random random = math.Random();

    ScatterHighDensityData() {
        var amount = 25000;

        generate(amount ~/ 2, 0, 0, 75000, 20000);
        generate(amount ~/ 4, 0, 0, 100000, 25000);
        generate(amount ~/ 8, 0, 0, 150000, 30000);
        generate(amount ~/ 8, 0, 0, 200000, 75000);
    }

    void generate(int count, int centerX, int centerY, int spreadX, int spreadY) {
        for (var i = 0; i <= count; i++) {
            var rangeX = random.nextDouble() * spreadX;
            var rangeY = random.nextDouble() * spreadY;
            var prop = random.nextDouble();
            var flip = 1;

            if (prop < .25) {
                rangeX *= flip;
                rangeY *= flip;
            } else if (prop >= .25 && prop < .5) {
                rangeX *= -flip;
                rangeY *= flip;
            } else if (prop >= .5 && prop < .75) {
                rangeX *= flip;
                rangeY *= -flip;
            } else {
                rangeX *= -flip;
                rangeY *= -flip;
            }

            var dispersionX = random.nextDouble() + 0.12;
            var dispersionY = random.nextDouble() + 0.12;
            var x = (centerX + (rangeX * dispersionX)).roundToDouble();
            var y = (centerY + (rangeY * dispersionY)).roundToDouble();

            this.add((ScatterHighDensityItem()
                ..x = x
                ..y = y
            ));
        }
    }
}
//end data
