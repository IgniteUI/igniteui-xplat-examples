//begin template
//begin imports
import 'package:flutter/widgets.dart' show SizedBox;
import 'package:igniteui_flutter_charts/src/igf-sparkline.dart';
import 'package:igniteui_flutter_charts/src/SparklineDisplayType.dart';
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
import 'package:igniteui_flutter_grid/src/igf-template-column.dart';
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_library/ProductsWithHistory.dart';
//end imports

class DataGridSparklineTemplate {
  //begin content
  void dataGridSparklineTemplate(IgfTemplateColumnState sender,
      IgfTemplateCellUpdatingEventArgsState args) {
    final row = args.cellInfo!.rowItem as ProductWithHistory;
    args.content = SizedBox(
        height: 70,
        child: IgfSparkline(
            dataSource: row.orderHistory!.asArray(),
            displayType: SparklineDisplayType.line,
            valueMemberPath: 'Sold',
            labelMemberPath: 'Week',
            brush: IgfSolidColorBrush.fromString('rgb(21, 190, 6)')));
  }
  //end content
}
//end template
