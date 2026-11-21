//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart'
    show IReflectableData;
import 'package:igniteui_flutter_core/src/type.dart'
    show TypeInfo, Double_$type;

class SparklineWaveItem implements IReflectableData {
  double index = 0;
  double angle = 0;
  double value = 0;

  Map<String, TypeInfo?> get propertyTypes => {
        'Index': Double_$type,
        'Angle': Double_$type,
        'Value': Double_$type,
      };

  Object? getValue(String? propertyName) {
    switch (propertyName) {
      case 'Index':
      case 'index':
        return index;
      case 'Angle':
      case 'angle':
        return angle;
      case 'Value':
      case 'value':
        return value;
    }
    return null;
  }

  void setValue(String? propertyName, Object? newValue) {
    switch (propertyName) {
      case 'Index':
      case 'index':
        index = (newValue as num).toDouble();
        break;
      case 'Angle':
      case 'angle':
        angle = (newValue as num).toDouble();
        break;
      case 'Value':
      case 'value':
        value = (newValue as num).toDouble();
        break;
    }
  }
}

class SparklineWaveData extends ArrayList<SparklineWaveItem?> {
  SparklineWaveData() {
    // Four turns sampled every five degrees, including positive and negative
    // readings so the same data also exercises the win/loss display type.
    for (var angle = 0; angle < 360 * 4; angle += 5) {
      final radians = angle * math.pi / 180;
      add(SparklineWaveItem()
        ..index = count.toDouble()
        ..angle = angle.toDouble()
        ..value = math.sin(radians) + math.sin(3 * radians) / 3);
    }
  }
}
//end data
