//begin imports
import { IgcGridCustomFilterRequestedEventArgs } from 'igniteui-webcomponents-grids';
//end imports

export class GroupG1LessThan {
    //begin eventHandler
    public groupG1LessThan(sender: any, args: IgcGridCustomFilterRequestedEventArgs): void {
        args.expression = args.filterFactory.property("Group").isEqualTo("G1")
            .and(args.filterFactory.property(args.column.field).isLessThan(args.value));
    }
    //end eventHandler
}
