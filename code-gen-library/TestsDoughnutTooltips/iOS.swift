//begin imports
import UIKit;
//end imports

public class TestsDoughnutTooltips {
    //begin eventHandler
    //Swift: Action
    public func testsDoughnutTooltips() {
        guard let data = CodeGenHelper.findByName(Any.self, "TestsDoughnutTooltipBindings") as? JsonDictionaryValue,
              let json = data.value as? String else {
            print("XSharpTesting: Doughnut tooltip bindings were not provided");
            return;
        }
        guard let bindings = JsonDictionaryParser().parse(json_: json) as? JsonDictionaryObject else {
            print("XSharpTesting: Doughnut tooltip bindings must be an object");
            return;
        }
        for name in fromEn(t: Optional<String>.self, en: bindings.getKeys()) {
            guard let name = name, let series = CodeGenHelper.findByName(IgsRingSeries.self, name) else {
                print("XSharpTesting: Missing tooltip series: " + (name ?? "(null)"));
                return;
            }
            // A null member removes the series' tooltip.
            guard let member = (bindings[name] as? JsonDictionaryValue)?.value as? String else {
                series.chartToolTipUpdating = nil;
                continue;
            }
            if (member != "Value" && member != "Label") {
                print("XSharpTesting: Unsupported doughnut tooltip member: " + member);
                return;
            }
            let getter = FastReflectionHelper();
            getter.propertyName = series.valueMemberPath;
            series.chartToolTipUpdating = { sender, args in
                guard let args = args, let data = args.currentData else { return }
                let value: Any? = member == "Label" ? data.itemLabel : getter.getPropertyValue(item: data.item);
                var text = "";
                if let number = value as? Double {
                    text = NumberUtil.doubleToMinDecimalsString(value: number) ?? "";
                } else if let value = value {
                    text = "\(value)";
                }
                let label = args.currentView as? UILabel ?? UILabel();
                label.text = text;
                args.currentView = label;
            };
        }
    }
    //end eventHandler
}
