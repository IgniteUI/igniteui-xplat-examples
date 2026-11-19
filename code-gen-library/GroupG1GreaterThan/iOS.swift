//begin imports
//end imports

public class GroupG1GreaterThan {
    //begin eventHandler
    public func groupG1GreaterThan(sender: Any?, args: IgsGridCustomFilterRequestedEventArgs?) {
        let factory = args!.filterFactory!
        let group = factory.property(propertyName: "Group")!.isEqualTo(literalValue: "G1")!
        let value = factory.property(propertyName: args!.column!.field)!.isGreaterThan(literalValue: args!.value)
        args!.expression = group.and(right: value)
    }
    //end eventHandler
}
