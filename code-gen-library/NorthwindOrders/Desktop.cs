
namespace Infragistics.Samples
{
    //begin data
#if !TESTING
    using Infragistics.Controls.DataSources;
#endif

    public class NorthwindOrders
    {
#if !TESTING
        public static ODataVirtualDataSource GetSource()
        {
            var vds = new ODataVirtualDataSource();
            vds.BaseUri = "https://services.odata.org/V4/Northwind/Northwind.svc";
            vds.EntitySet = "Orders";
            vds.PageSizeRequested = 200;
            return vds;
        }
#endif
    }
    //end data
}
