//begin imports
import { IgcAccessibilityNodeCreatingEventArgs } from 'igniteui-webcomponents-charts';
import { IgcAccessibilityAction } from 'igniteui-webcomponents-core';
import { IgcAccessibilityActionCollection } from 'igniteui-webcomponents-core';
import { AccessibilityRole } from 'igniteui-webcomponents-core';
//end imports

export class TestsAccessibilityNodeAddAction {
    //begin eventHandler
    public testsAccessibilityNodeAddAction(sender: any, args: IgcAccessibilityNodeCreatingEventArgs): void {
        if (args.node != null && args.node.role == AccessibilityRole.Item) {
            if (args.node.actions == null) {
                args.node.actions = new IgcAccessibilityActionCollection();
            }
            const action = new IgcAccessibilityAction();
            action.name = "Activate";
            args.node.actions.add(action);
        }
    }
    //end eventHandler
}
