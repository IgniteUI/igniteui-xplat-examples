
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Text.Json;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Net.Http;
    using IgniteUI.Blazor.Controls;

    public class FinancialDataService : List<FinancialDataDetails>
    {
        public async static Task<FinancialDataService> FetchData()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/FinancialData1000.json";
            var client = new HttpClient();
            var str = await client.GetStringAsync(url);
            var json = JsonSerializer.Deserialize<Dictionary<string, object>[]>(str);
            var data = ConvertData(json); 
            return data;
        }
  
        public static FinancialDataService ConvertData(Dictionary<string, object>[] arr)
        {
            var ret = new FinancialDataService();
            foreach (var json in arr)
            {
                var item = new FinancialDataDetails();
                item.Category = ((JsonElement)json["Category"]).GetString();
                item.Type = ((JsonElement)json["Type"]).GetString();
                item.Contract = ((JsonElement)json["Contract"]).GetString();
                item.Settlement = ((JsonElement)json["Settlement"]).GetString();
                item.Region = ((JsonElement)json["Region"]).GetString();
                item.Country = ((JsonElement)json["Country"]).GetString();
                item.Risk = ((JsonElement)json["Risk"]).GetString();
                item.Sector = ((JsonElement)json["Sector"]).GetString();
                item.Issuer = ((JsonElement)json["Issuer"]).GetString();
                item.Maturity = ((JsonElement)json["Maturity"]).GetString();
                item.IndGroup = ((JsonElement)json["IndGroup"]).GetString();
                item.IndSector = ((JsonElement)json["IndSector"]).GetString();
                item.IndCategory = ((JsonElement)json["IndCategory"]).GetString();
                item.Cpn = ((JsonElement)json["Cpn"]).GetString();

                item.Spread = ((JsonElement)json["Spread"]).GetDouble();
                item.Open = ((JsonElement)json["Open"]).GetDouble();
                item.Price = ((JsonElement)json["Price"]).GetDouble();
                item.Buy = ((JsonElement)json["Buy"]).GetDouble();
                item.Sell = ((JsonElement)json["Sell"]).GetDouble();
                item.Change = ((JsonElement)json["Change"]).GetDouble();
                item.ChangePercent = ((JsonElement)json["ChangePercent"]).GetDouble();
                item.High = ((JsonElement)json["High"]).GetDouble();
                item.Low = ((JsonElement)json["Low"]).GetDouble();
                item.AnnualHigh = ((JsonElement)json["YearlyHigh"]).GetDouble();
                item.AnnualLow = ((JsonElement)json["YearlyLow"]).GetDouble();
                item.AnnualStart = ((JsonElement)json["YearlyStart"]).GetDouble();
                item.AnnualChange = ((JsonElement)json["YearlyChange"]).GetDouble();
                item.ZV_SPREAD = ((JsonElement)json["ZV_SPREAD"]).GetDouble();
                item.KRD_3YR = ((JsonElement)json["KRD_3YR"]).GetDouble();
                item.KRD_5YR = ((JsonElement)json["KRD_5YR"]).GetDouble();
                item.KRD_1YR = ((JsonElement)json["KRD_1YR"]).GetDouble();
                item.ID = ((JsonElement)json["ID"]).GetDouble();
                
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
        // public string CpnTyp { get; set; }
        // public string Moodys { get; set; }
        // public string Fitch { get; set; }
        // public string DBRS { get; set; } 
        public string CUSIP { get; set; }
        public string Cpn { get; set; }
        public double KRD_3YR { get; set; }
        public double KRD_5YR { get; set; }
        public double KRD_1YR { get; set; }
        public double ZV_SPREAD { get; set; }
        public double ID { get; set; }
    }
    //end async data
}
