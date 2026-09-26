//begin imports
import 'package:igniteui_flutter_grid/src/igf-grid-custom-filter-requested-event-args.dart' show IgfGridCustomFilterRequestedEventArgsState;
//end imports

class GroupG1AndA
{
//begin eventHandler
    void groupG1AndA(Object? sender, IgfGridCustomFilterRequestedEventArgsState args) {
        var factory = args.filterFactory!;
        args.expression = factory.property("Group")!.isEqualTo1("G1")!
            .and(factory.property(args.column!.field)!.contains1("A"));
    }
//end eventHandler
}
