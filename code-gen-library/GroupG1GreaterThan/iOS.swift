//begin imports
//end imports

public class GroupG1GreaterThan {
    //begin eventHandler
    public func groupG1GreaterThan(sender: Any?, args: IgsGridCustomFilterRequestedEventArgs?) {
        guard let args = args, let factory = args.filterFactory else { return }
        args.expression = factory.property(propertyName: "Group")?.isEqualTo(literalValue: "G1")?
            .and(right: factory.property(propertyName: args.column?.field)?
                .isGreaterThan(literalValue: args.value))
    }
    //end eventHandler
}
