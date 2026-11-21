//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart'
    show IReflectableData;
import 'package:igniteui_flutter_core/src/type.dart'
    show TypeInfo, Double_$type;

class ScatterMagneticFieldItem implements IReflectableData {
  double x = 0;
  double y = 0;
  double z = 0;
  double index = 0;

  Map<String, TypeInfo?> get propertyTypes => {
        'X': Double_$type,
        'Y': Double_$type,
        'Z': Double_$type,
        'Index': Double_$type,
      };

  Object? getValue(String? propertyName) {
    switch (propertyName) {
      case 'X':
      case 'x':
        return x;
      case 'Y':
      case 'y':
        return y;
      case 'Z':
      case 'z':
        return z;
      case 'Index':
      case 'index':
        return index;
    }
    return null;
  }

  void setValue(String? propertyName, Object? value) {
    switch (propertyName) {
      case 'X':
      case 'x':
        x = (value as num).toDouble();
        break;
      case 'Y':
      case 'y':
        y = (value as num).toDouble();
        break;
      case 'Z':
      case 'z':
        z = (value as num).toDouble();
        break;
      case 'Index':
      case 'index':
        index = (value as num).toDouble();
        break;
    }
  }
}

class ScatterMagneticFieldData extends ArrayList<ScatterMagneticFieldItem?> {
  ScatterMagneticFieldData() {
    // Eleven by eleven readings over the same longitude/latitude grid as
    // the other platforms. Values form a banded field for the color scale.
    for (var x = -180.0; x <= 180; x += 36) {
      for (var y = -90.0; y <= 90; y += 18) {
        add(ScatterMagneticFieldItem()
          ..x = x
          ..y = y
          ..z = math.cos(x) + math.cos(y)
          ..index = count.toDouble());
      }
    }
  }
}
//end data
