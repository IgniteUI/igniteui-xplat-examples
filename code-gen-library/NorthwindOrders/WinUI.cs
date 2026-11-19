
namespace Infragistics.Samples
{
    //begin data
    using Infragistics.Controls.DataSource;

    // WinUI has no product OData data source; the samples browser supplies ODataVirtualDataSource.
    // Samples bind ItemsSource to an instance of this type, so it is the data source itself.
    public class NorthwindOrders : ODataVirtualDataSource
    {
        public NorthwindOrders()
        {
            this.BaseUri = "https://services.odata.org/V4/Northwind/Northwind.svc";
            this.EntitySet = "Orders";
            this.PageSizeRequested = 200;
        }
    }
    //end data
}
