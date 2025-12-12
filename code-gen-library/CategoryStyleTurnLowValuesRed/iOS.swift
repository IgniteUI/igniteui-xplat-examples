//begin imports
import UIKit;
//end imports

public class CategoryStyleTurnLowValuesRed {
    //begin eventHandler
    public func categoryStyleTurnLowValuesRed(sender: Any?, args: IgsAssigningCategoryStyleEventArgs?) {
        guard let series = sender as? IgsSeries else { return }
        guard let items = args!.getItems!(args!.startIndex, args!.endIndex) else { return }
    
        for i in 0..<items.count {
            guard let item: Any? = items[i] else { continue }
            if let value = series.getItemValue(item: item, memberPathName: "valueMemberPath") as? Double, value < 60 {
                args!.fill = IgsSolidColorBrush(UIColor.red);
            }
        }
    }
    //end eventHandler
}
