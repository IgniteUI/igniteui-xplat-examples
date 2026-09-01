
namespace Infragistics.Samples
{
    //begin async data
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Text.Json;
    using System.Threading.Tasks;

    public class NorthwindOrders : List<Dictionary<string, object>>
    {
        public static async Task<NorthwindOrders> Fetch()
        {
            const string url = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders?$format=json";
            using var client = new HttpClient();
            var json = await client.GetStringAsync(url);
            using var document = JsonDocument.Parse(json);
            var orders = new NorthwindOrders();
            foreach (var element in document.RootElement.GetProperty("value").EnumerateArray())
            {
                var order = JsonSerializer.Deserialize<Dictionary<string, object>>(element.GetRawText());
                if (order != null) orders.Add(order);
            }
            return orders;
        }
    }
    //end async data
}
