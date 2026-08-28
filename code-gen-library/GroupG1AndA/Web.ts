//begin imports
import { IgcGridCustomFilterRequestedEventArgs } from 'igniteui-webcomponents-grids';
//end imports

export class GroupG1AndA {
    //begin eventHandler
    public groupG1AndA(sender: any, args: IgcGridCustomFilterRequestedEventArgs): void {
        args.expression = args.filterFactory.property("Group").isEqualTo("G1")
            .and(args.filterFactory.property(args.column.field).contains("A"));
    }
    //end eventHandler
}
