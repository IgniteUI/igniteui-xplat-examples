//begin imports
//end imports

public class GroupG1LessThan {
    //begin eventHandler
    public func groupG1LessThan(sender: Any?, args: IgsGridCustomFilterRequestedEventArgs?) {
        guard let args = args, let factory = args.filterFactory else { return }
        args.expression = factory.property(propertyName: "Group")?.isEqualTo(literalValue: "G1")?
            .and(right: factory.property(propertyName: args.column?.field)?
                .isLessThan(literalValue: args.value))
    }
    //end eventHandler
}
