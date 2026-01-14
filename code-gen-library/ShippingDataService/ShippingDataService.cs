using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System;
using System.Net.Http.Json;

namespace Infragistics.Samples
{
    public class ShippingDataService : IShippingDataService
    {
        private readonly HttpClient _http;

        public ProductDataService(HttpClient http)
        {
            _http = http;
        }

        public async Task<List<ShippingDataItem>> GetTable()
        {
            using HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, new Uri("https://www.igniteui.com/api/orders", UriKind.RelativeOrAbsolute));
            using HttpResponseMessage response = await _http.SendAsync(request).ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadFromJsonAsync<List<ShippingDataItem>>().ConfigureAwait(false);
            }

            return new List<ShippingDataItem>();
        }
    }
    public interface IShippingDataService
    {
        Task<List<ShippingDataItem>> GetTable();
    }

    public class ShippingDataItem
    {
        public int OrderID { get; set; }
		public string EmployeeName { get; set; }
		public double ShipperID { get; set; }
		public string ShipperName { get; set; }
		public string CustomerID { get; set; }
		public string ContactName { get; set; }
		public int TotalItems { get; set; }
		public double TotalPrice { get; set; }
		public double Freight { get; set; }
		public string ShipAddress { get; set; }
		public string ShipCountry { get; set; }
		public string OrderDate { get; set; }
		public string ShipPostalCode { get; set; }
    }
}
