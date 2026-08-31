//begin imports
import { IgcGridCustomFilterRequestedEventArgs } from 'igniteui-webcomponents-grids';
//end imports

export class GroupG1GreaterThan {
    //begin eventHandler
    public groupG1GreaterThan(sender: any, args: IgcGridCustomFilterRequestedEventArgs): void {
        args.expression = args.filterFactory.property("Group").isEqualTo("G1")
            .and(args.filterFactory.property(args.column.field).isGreaterThan(args.value));
    }
    //end eventHandler
}
