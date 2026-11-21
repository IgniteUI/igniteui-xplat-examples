//begin imports
import 'package:igniteui_flutter_charts/src/igf-domain-chart.dart' show IgfDomainChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
//end imports

class EditorChangeReplayTransitionInDomain {
    //begin eventHandler
    void editorChangeReplayTransitionInDomain(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        CodeGenHelper.getDescription<IgfDomainChartState>('content')!.replayTransitionIn();
    }
    //end eventHandler
}
