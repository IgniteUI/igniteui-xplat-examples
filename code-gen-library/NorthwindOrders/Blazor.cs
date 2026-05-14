
namespace Infragistics.Samples
{
    //begin async data
    using IgniteUI.Blazor.Controls;
    using IgniteUI.Blazor.Controls.Datasources;

    public class NorthwindOrders
    {
        public static IgbODataVirtualDataSource GetSource()
        {
            var vds = new IgbODataVirtualDataSource();
            vds.BaseUri = "https://services.odata.org/V4/Northwind/Northwind.svc";
            vds.EntitySet = "Orders";
            vds.PageSizeRequested = 200;
            return vds;
        }
    }
}
