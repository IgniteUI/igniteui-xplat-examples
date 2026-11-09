//begin imports
import 'package:igniteui_flutter_core/src/igf-accessibility-node-creating-event-args.dart' show IgfAccessibilityNodeCreatingEventArgsState;
import 'package:igniteui_flutter_core/src/igf-accessibility-action.dart' show IgfAccessibilityActionState;
import 'package:igniteui_flutter_core/src/igf-accessibility-action-collection.dart' show IgfAccessibilityActionCollection;
import 'package:igniteui_flutter_core/src/AccessibilityRole.dart' show AccessibilityRole;
//end imports
//begin eventHandler
void testsAccessibilityNodeAddAction(Object? sender, IgfAccessibilityNodeCreatingEventArgsState args) {
    var node = args.node;
    if (node != null && node.role == AccessibilityRole.item) {
        if (node.actions == null) {
            node.actions = IgfAccessibilityActionCollection();
        }
        var action = IgfAccessibilityActionState();
        action.name = "Activate";
        node.actions!.add(action);
    }
}
//end eventHandler
