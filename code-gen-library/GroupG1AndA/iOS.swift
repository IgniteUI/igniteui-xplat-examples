//begin imports
//end imports

public class GroupG1AndA {
    //begin eventHandler
    public func groupG1AndA(sender: Any?, args: IgsGridCustomFilterRequestedEventArgs?) {
        let factory = args!.filterFactory!
        let group = factory.property(propertyName: "Group")!.isEqualTo(literalValue: "G1")!
        let value = factory.property(propertyName: args!.column!.field)!.contains(subString: "A")
        args!.expression = group.and(right: value)
    }
    //end eventHandler
}
