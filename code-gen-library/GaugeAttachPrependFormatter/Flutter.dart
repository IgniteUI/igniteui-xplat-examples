//begin imports
import 'package:igniteui_flutter_gauges/src/igf-format-linear-graph-label-event-args.dart' show IgfFormatLinearGraphLabelEventArgsState;
//end imports

class GaugeAttachPrependFormatter
{
//begin eventHandler
    void gaugeAttachPrependFormatter(Object? sender, IgfFormatLinearGraphLabelEventArgsState args) {
        args.label = "\$" + (args.label ?? "");
    }
//end eventHandler
}
