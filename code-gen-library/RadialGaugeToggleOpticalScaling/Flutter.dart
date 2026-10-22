//begin imports
import 'package:igniteui_flutter_gauges/src/igf-radial-gauge.dart' show IgfRadialGaugeState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class RadialGaugeToggleOpticalScaling
{
//begin eventHandler
    void radialGaugeToggleOpticalScaling(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var gauge = CodeGenHelper.getDescription<IgfRadialGaugeState>("content");
        if (gauge == null) return;
        var value = args.newValue;
        gauge.opticalScalingEnabled = value is bool && value;
    }
//end eventHandler
}
