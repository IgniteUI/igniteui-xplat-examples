
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Net.Http;
    using Newtonsoft.Json.Linq;

    public class FinancialDataService : List<FinancialDataDetails>
    {
        public async static Task<FinancialDataService> FetchData()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/FinancialData1000.json";
            var client = new HttpClient();
            var str = await client.GetStringAsync(url);
            var json = JArray.Parse(str);
            var data = ConvertData(json);
            return data;
        }

        public static FinancialDataService ConvertData(JArray arr)
        {
            var ret = new FinancialDataService();
            foreach (var json in arr)
            {
                var item = new FinancialDataDetails();
                item.Category = json.Value<string>("Category"); 
                item.Type = json.Value<string>("Type"); 
                item.Contract = json.Value<string>("Contract"); 
                item.Settlement = json.Value<string>("Settlement"); 
                item.Region = json.Value<string>("Region"); 
                item.Country = json.Value<string>("Country"); 
                item.Risk = json.Value<string>("Risk"); 
                item.Sector = json.Value<string>("Sector"); 
                item.Issuer = json.Value<string>("Issuer"); 
                item.Maturity = json.Value<string>("Maturity"); 
                item.IndGroup = json.Value<string>("IndGroup"); 
                item.IndSector = json.Value<string>("IndSector"); 
                item.IndCategory = json.Value<string>("IndCategory"); 
                item.CpnTyp = json.Value<string>("CpnTyp"); 
                item.Cpn = json.Value<string>("Cpn"); 

                item.Spread = json.Value<double>("Spread");
                item.Open = json.Value<double>("Open");
                item.Price = json.Value<double>("Price");
                item.Buy = json.Value<double>("Buy");
                item.Sell = json.Value<double>("Sell");
                item.Change = json.Value<double>("Change");
                item.ChangePercent = json.Value<double>("ChangePercent");
                item.High = json.Value<double>("High");
                item.Low = json.Value<double>("Low");
                item.AnnualHigh = json.Value<double>("AnnualHigh");
                item.AnnualLow = json.Value<double>("AnnualLow");
                item.AnnualStart = json.Value<double>("AnnualStart");
                item.AnnualChange = json.Value<double>("AnnualChange");
                item.ZV_SPREAD = json.Value<double>("ZV_SPREAD");
                item.KRD_3YR = json.Value<double>("KRD_3YR");
                item.KRD_5YR = json.Value<double>("KRD_5YR");
                item.KRD_1YR = json.Value<double>("KRD_1YR");
                item.ID = json.Value<double>("ID");
                ret.Add(item);
            }
            return ret;
        }
    }

    public class FinancialDataDetails
    {
        public string Category { get; set; }
        public string Type { get; set; }
        public double Spread { get; set; }
        public double Open { get; set; }
        public double Price { get; set; }
        public double Buy { get; set; }
        public double Sell { get; set; }
        public double Change { get; set; }
        public double ChangePercent { get; set; }
        public double Volume { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double AnnualHigh { get; set; }
        public double AnnualLow { get; set; }
        public double AnnualStart { get; set; }
        public double AnnualChange { get; set; }
        public string Settlement { get; set; }
        public string Contract { get; set; }
        public string Region { get; set; }
        public string Country { get; set; }
        public string Risk { get; set; }
        public string Sector { get; set; }
        public string Currency { get; set; }
        public string Security { get; set; }
        public string Issuer { get; set; }
        public string Maturity { get; set; }
        public string IndGroup { get; set; }
        public string IndSector { get; set; }
        public string IndCategory { get; set; }
        public string Cpn { get; set; }
        public double KRD_3YR { get; set; }
        public double KRD_5YR { get; set; }
        public double KRD_1YR { get; set; }
        public double ZV_SPREAD { get; set; }
        public double ID { get; set; }
    }
    //end async data
}
