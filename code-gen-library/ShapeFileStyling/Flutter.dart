//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-shape-style-event-args.dart';
import 'package:igniteui_flutter_core/src/igf-shapefile-record.dart';
import 'package:igniteui_flutter_core/src/ShapefileRecord.dart';
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

//begin eventHandler
void shapeFileStyling(Object? sender, IgfAssigningShapeStyleEventArgsState args) {
  final record = args.getItems!(args.startIndex, args.endIndex)!.first;
  final continent = record is IgfShapefileRecordState
      ? record.getFieldValue('Continent')
      : (record as ShapefileRecord).getFieldValue('Continent');
  final String fill;
  switch (continent) {
    case 'Africa':
      fill = '#ECB912';
      break;
    case 'Asia':
      fill = '#E11D1D';
      break;
    case 'Europe':
      fill = '#2894EC';
      break;
    case 'South America':
    case 'North America':
      fill = '#0CC308';
      break;
    case 'Australia':
      fill = '#B42AE9';
      break;
    default:
      fill = 'gray';
  }
  args.fill = IgfSolidColorBrush.fromString(fill);
  args.stroke = IgfSolidColorBrush.fromString('black');
}
//end eventHandler
