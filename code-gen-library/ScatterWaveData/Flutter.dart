//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart'
    show IReflectableData;
import 'package:igniteui_flutter_core/src/type.dart'
    show TypeInfo, Double_$type;

class ScatterWaveItem implements IReflectableData {
  double x = 0;
  double sinValue = 0;
  double cosValue = 0;

  Map<String, TypeInfo?> get propertyTypes => {
        'X': Double_$type,
        'SinValue': Double_$type,
        'CosValue': Double_$type,
      };

  Object? getValue(String? propertyName) {
    switch (propertyName) {
      case 'X':
      case 'x':
        return x;
      case 'SinValue':
      case 'sinValue':
        return sinValue;
      case 'CosValue':
      case 'cosValue':
        return cosValue;
    }
    return null;
  }

  void setValue(String? propertyName, Object? value) {
    switch (propertyName) {
      case 'X':
      case 'x':
        x = (value as num).toDouble();
        break;
      case 'SinValue':
      case 'sinValue':
        sinValue = (value as num).toDouble();
        break;
      case 'CosValue':
      case 'cosValue':
        cosValue = (value as num).toDouble();
        break;
    }
  }
}

class ScatterWaveData extends ArrayList<ScatterWaveItem?> {
  ScatterWaveData() {
    // Two full turns, sampled every ten degrees, expose both curves' axis crossings.
    for (var degrees = -360; degrees <= 360; degrees += 10) {
      final radians = degrees * math.pi / 180;
      add(ScatterWaveItem()
        ..x = degrees.toDouble()
        ..sinValue = math.sin(radians)
        ..cosValue = math.cos(radians));
    }
  }
}
//end data
