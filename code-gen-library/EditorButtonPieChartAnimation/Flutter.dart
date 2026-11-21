//begin imports
import 'package:igniteui_flutter_charts/src/igf-pie-chart.dart' show IgfPieChartState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/PieChartAnimationUtility.dart' show PieChartAnimation;
//end imports

class EditorButtonPieChartAnimation {
//begin eventHandler
    void editorButtonPieChartAnimation(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        PieChartAnimation.toggle(CodeGenHelper.getDescription<IgfPieChartState>('content')!);
    }
//end eventHandler
}
