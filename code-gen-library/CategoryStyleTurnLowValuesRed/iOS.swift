//begin imports
//end imports

public class CategoryStyleTurnLowValuesRed {
    //begin eventHandler
    public func categoryStyleTurnLowValuesRed(sender: Any?, args: IgsAssigningCategoryStyleEventArgs) {
        guard let series = sender as? IgsSeries else { return }
        guard let items = args.getItems?(args.startIndex, args.endIndex) else { return }

        for i in 0..<items.count {
            guard let item = items[i] else { continue }
            if let value = series.getItemValue(item, "valueMemberPath") as? Double, value < 60 {
                args.fill = IgsBrush.fromString("red")
            }
        }
    }
    //end eventHandler
}
