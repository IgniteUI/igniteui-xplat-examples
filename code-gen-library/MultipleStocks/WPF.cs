
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;
    using Newtonsoft.Json.Linq;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Net.Http;
    using System.Collections.ObjectModel;

    public class MultipleStocks : List<TitledStockData>
    {
        public async static Task<MultipleStocks> Fetch()
        {
            var google = await MultipleStocks.GetGoogleStock();
            var amazon = await MultipleStocks.GetAmazonStock();

            var val = new MultipleStocks();
            val.Add(google);
            val.Add(amazon);
            return val;
        }

        /** gets Amazon stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetAmazonStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData.Title = "Amazon";
            return stockData;
        }

        /** gets Tesla stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetTeslaStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData.Title = "Tesla";
            return stockData;
        }

        /** gets Microsoft stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetMicrosoftStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData.Title = "Microsoft";
            return stockData;
        }

        /** gets Google stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetGoogleStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData.Title = "Google";
            return stockData;
        }

        private async static Task<JArray> Fetch(string url)
        {
            HttpClient client = new HttpClient();
            var str = await client.GetStringAsync(url);
            var arr = JArray.Parse(str);
            return arr;
        }

        public static TitledStockData ConvertData(JArray arr)
        {
            var ret = new TitledStockData();

            foreach (var json in arr)
            {
                var date = json.Value<string>("date");
                var parts = date.Split('-'); // "2020-01-01"
                var item = new MultipleStocksItem();
                item.Date = new DateTime(int.Parse(parts[0]), int.Parse(parts[1]) + 1, int.Parse(parts[2]));
                item.Open = json.Value<double>("open");
                item.High = json.Value<double>("high");
                item.Low = json.Value<double>("low");
                item.Close = json.Value<double>("close");
                item.Volume = json.Value<double>("volume");
                ret.Add(item);

            }

            return ret;
        }
    }

    public class MultipleStocksItem
    {
        public DateTime Date { get; set; }
        public double Open { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Close { get; set; }
        public double Volume { get; set; }
    }

    public class TitledStockData
        : ObservableCollection<MultipleStocksItem>
    {
        public string Title { get; set; }
    }
    //end async data
}
