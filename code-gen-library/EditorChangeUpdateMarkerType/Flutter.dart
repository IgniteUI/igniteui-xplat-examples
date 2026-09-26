//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_charts/src/MarkerType.dart' show MarkerType;
import 'package:igniteui_flutter_core/src/registrar.dart' show TypeRegistrar;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description.dart' show IgfPropertyEditorPropertyDescriptionState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeUpdateMarkerType
{
//begin eventHandler
    void editorChangeUpdateMarkerType(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var item = sender as IgfPropertyEditorPropertyDescriptionState;
        var value = item.primitiveValue as String?;
        var chart = CodeGenHelper.getDescription<IgfCategoryChartState>("content")!;

        // Dart enums carry their names rather than a parse of their own, so the
        // registrar answers for them the way the descriptions do.
        var markerVal = TypeRegistrar.parseEnum("MarkerType", value) as MarkerType;
        chart.markerTypes!.clear();
        chart.markerTypes!.add(markerVal);
    }
//end eventHandler
}
