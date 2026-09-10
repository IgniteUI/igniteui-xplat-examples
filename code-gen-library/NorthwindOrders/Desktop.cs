
namespace Infragistics.Samples
{
    //begin data
    using Infragistics.Controls.DataSources;

    public class NorthwindOrders
    {
        public static ODataVirtualDataSource GetSource()
        {
            var vds = new ODataVirtualDataSource();
            vds.BaseUri = "https://services.odata.org/V4/Northwind/Northwind.svc";
            vds.EntitySet = "Orders";
            vds.PageSizeRequested = 200;
            return vds;
        }
    }
    //end data
}
