//begin imports
import { ODataVirtualDataSource } from 'igniteui-webcomponents-datasources';
//end imports

//begin async data
export class NorthwindOrders {
    public static getSource(): ODataVirtualDataSource {
        const vds = new ODataVirtualDataSource();
        vds.baseUri = "https://services.odata.org/V4/Northwind/Northwind.svc";
        vds.entitySet = "Orders";
        vds.pageSizeRequested = 200;
        return vds;
    }
}
//end async data
