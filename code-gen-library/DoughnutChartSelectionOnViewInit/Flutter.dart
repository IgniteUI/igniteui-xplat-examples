//begin imports
import 'package:igniteui_flutter_charts/src/igf-ring-series.dart' show IgfRingSeriesState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description.dart' show IgfPropertyEditorPropertyDescriptionState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/DoughnutChartSelectionUtility.dart' show DoughnutChartSelectionReadout;
//end imports

class DoughnutChartSelectionOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void doughnutChartSelectionOnViewInit() {
        // Match the native samples: initialize the readout; clicks select the slices.
        DoughnutChartSelectionReadout.show(
            CodeGenHelper.findByName<IgfRingSeriesState>('ringSeries')!,
            CodeGenHelper.findByName<IgfPropertyEditorPropertyDescriptionState>('SelectedSlice')!,
            0);
    }
    //end eventHandler
}
