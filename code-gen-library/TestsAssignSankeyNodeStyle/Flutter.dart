//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-flow-style-event-args.dart' show IgfAssigningFlowStyleEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports
//begin eventHandler
void testsAssignSankeyNodeStyle(Object? sender, IgfAssigningFlowStyleEventArgsState args) {
    // Recolor the first flow node (Order 0 = node A) to purple via the AssigningStyle event.
    if (args.startIndex == 0) {
        // fromString("purple") is CSS purple, #800080 -- the 128,0,128 that Desktop.cs
        // and Web.ts produce. iOS spells it out because UIColor.purple quantizes to 127.
        args.fill = IgfSolidColorBrush.fromString("purple");
    }
}
//end eventHandler
