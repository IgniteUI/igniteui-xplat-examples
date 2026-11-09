//begin imports
import 'package:igniteui_flutter_core/src/igf-accessibility-node-creating-event-args.dart' show IgfAccessibilityNodeCreatingEventArgsState;
import 'package:igniteui_flutter_core/src/AccessibilityRole.dart' show AccessibilityRole;
//end imports
//begin eventHandler
void testsAccessibilityNodeOverrideDescription(Object? sender, IgfAccessibilityNodeCreatingEventArgsState args) {
    var node = args.node;
    if (node != null && node.role == AccessibilityRole.item) {
        node.descriptionText = "custom override";
    }
}
//end eventHandler
