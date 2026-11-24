//begin imports
//end imports

public class GroupG1AndA {
    //begin eventHandler
    public func groupG1AndA(sender: Any?, args: IgsGridCustomFilterRequestedEventArgs?) {
        guard let args = args, let factory = args.filterFactory else { return }
        args.expression = factory.property(propertyName: "Group")?.isEqualTo(literalValue: "G1")?
            .and(right: factory.property(propertyName: args.column?.field)?
                .contains(subString: "A"))
    }
    //end eventHandler
}
