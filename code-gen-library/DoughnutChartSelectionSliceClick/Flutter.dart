//begin imports
import 'package:igniteui_flutter_charts/src/igf-ring-series.dart' show IgfRingSeriesState;
import 'package:igniteui_flutter_charts/src/igf-slice-click-event-args.dart' show IgfSliceClickEventArgsState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description.dart' show IgfPropertyEditorPropertyDescriptionState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/DoughnutChartSelectionUtility.dart' show DoughnutChartSelectionReadout;
//end imports

class DoughnutChartSelectionSliceClick {
    //begin eventHandler
    void doughnutChartSelectionSliceClick(Object? sender, IgfSliceClickEventArgsState args) {
        DoughnutChartSelectionReadout.show(
            CodeGenHelper.findByName<IgfRingSeriesState>('ringSeries')!,
            CodeGenHelper.findByName<IgfPropertyEditorPropertyDescriptionState>('SelectedSlice')!,
            args.isSelected ? args.index : -1);
    }
    //end eventHandler
}
