//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-button-click-event-args.dart' show IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-domain-chart.dart' show IgfDomainChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorButtonReplayTransitionInDomain
{
//begin eventHandler
    void editorButtonReplayTransitionInDomain(Object? sender, IgfPropertyEditorPropertyDescriptionButtonClickEventArgsState args) {
        var chart = CodeGenHelper.getDescription<Object>("content");

        // Both the data chart and the category chart derive from the domain chart,
        // which is where replayTransitionIn lives -- so one branch covers the two
        // the other platforms test separately.
        if (chart is IgfDomainChartState) {
            chart.replayTransitionIn();
        }
    }
//end eventHandler
}
