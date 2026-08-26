//begin imports
import { IgcGridCustomFilterRequestedEventArgs } from 'igniteui-webcomponents-grids';
//end imports

export class DataGridFilterSalesLessThanOrEqual300k {
    //begin eventHandler
    public dataGridFilterSalesLessThanOrEqual300k(sender: any, args: IgcGridCustomFilterRequestedEventArgs): void {
        args.expression = args.filterFactory.property("Sales").isLessThanOrEqualTo(300000);
    }
    //end eventHandler
}
