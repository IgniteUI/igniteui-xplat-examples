//begin imports
import 'package:igniteui_flutter_gauges/src/igf-align-linear-graph-label-event-args.dart' show IgfAlignLinearGraphLabelEventArgsState;
//end imports

class GaugeAlignLabelWithOffset
{
//begin eventHandler
    void gaugeAlignLabelWithOffset(Object? sender, IgfAlignLinearGraphLabelEventArgsState args) {
        args.offsetX += 15;
        args.offsetY += 12;
    }
//end eventHandler
}
