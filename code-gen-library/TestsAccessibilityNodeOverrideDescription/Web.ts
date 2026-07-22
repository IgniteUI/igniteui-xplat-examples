//begin imports
import { IgcAccessibilityNodeCreatingEventArgs } from 'igniteui-webcomponents-charts';
import { AccessibilityRole } from 'igniteui-webcomponents-core';
//end imports

export class TestsAccessibilityNodeOverrideDescription {
    //begin eventHandler
    public testsAccessibilityNodeOverrideDescription(sender: any, args: IgcAccessibilityNodeCreatingEventArgs): void {
        if (args.node != null && args.node.role == AccessibilityRole.Item) {
            args.node.description = "custom override";
        }
    }
    //end eventHandler
}
