
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;
    using IgniteUI.Blazor.Controls;

    public class SalesPersonsData : List<SalesPerson>
    {
        public SalesPersonsData() : this(8000) { }

        public SalesPersonsData(int count)
        {
            var firstNames = new[] { "Kyle","Gina","Irene","Katie","Michael","Oscar","Ralph","Torrey","William","Bill","Daniel","Frank","Brenda","Danielle","Fiona","Howard","Jack","Larry","Holly","Jennifer","Liz","Pete","Steve","Vince","Zeke" };
            var lastNames  = new[] { "Adams","Crowley","Ellis","Gable","Irvine","Keefe","Mendoza","Owens","Rooney","Waddell","Thomas","Betts","Doran","Fitzgerald","Holmes","Jefferson","Landry","Newberry","Perez","Spencer","Vargas","Grimes","Edwards","Stark","Cruise","Fitz","Chief","Blanc","Perry","Stone","Williams","Lane","Jobs" };
            var territories = new[] { "Australia","Canada","Egypt","Greece","Italy","Kenya","Mexico","Oman","Qatar","Sweden","Uruguay","Yemen","Bulgaria","Denmark","France","Hungary","Japan","Latvia","Netherlands","Portugal","Russia","Turkey","Venezuela","Zimbabwe" };
            var rand = new Random();
            var today = DateTime.Now;

            for (int i = 0; i < count; i++)
            {
                var firstIndex = (int)Math.Round(rand.NextDouble() * (firstNames.Length - 1));
                var item = new SalesPerson();
                item.Index = i;
                item.FirstName = firstNames[firstIndex];
                item.LastName = lastNames[(int)Math.Round(rand.NextDouble() * (lastNames.Length - 1))];
                item.Name = item.FirstName + item.LastName;
                item.ImageName = "";
                item.Territory = territories[(int)Math.Round(rand.NextDouble() * (territories.Length - 1))];
                item.AvgSale = Math.Round(rand.NextDouble() * 800) + 200.0;
                item.Change = rand.NextDouble() * 40.0 - 20.0;
                item.PercentChange = 0;
                item.YearToDateSales = Math.Round(rand.NextDouble() * 50000);
                item.DateValue = today.AddDays(Math.Round(rand.NextDouble() * 500));
                SalesPersonsData.AssignKpis(item, rand);
                Add(item);
            }
        }

        public static void AssignKpis(SalesPerson item, Random rand)
        {
            item.KPI_0  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_1  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_2  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_3  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_4  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_5  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_6  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_7  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_8  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_9  = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_10 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_11 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_12 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_13 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_14 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_15 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_16 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_17 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_18 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_19 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_20 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_21 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_22 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_23 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_24 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_25 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_26 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_27 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_28 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_29 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_30 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_31 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_32 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_33 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_34 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_35 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_36 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_37 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_38 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_39 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_40 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_41 = Math.Round(rand.NextDouble() * 100.0);
            item.KPI_42 = Math.Round(rand.NextDouble() * 100.0);
        }
    }

    public class SalesPerson
    {
        public int Index { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Name { get; set; }
        public string ImageName { get; set; }
        public string Territory { get; set; }
        public double AvgSale { get; set; }
        public double AvgSaleHeat { get; set; }
        public double Change { get; set; }
        public double PercentChange { get; set; }
        public double YearToDateSales { get; set; }
        public DateTime DateValue { get; set; }

        public double KPI_0  { get; set; }
        public double KPI_1  { get; set; }
        public double KPI_2  { get; set; }
        public double KPI_3  { get; set; }
        public double KPI_4  { get; set; }
        public double KPI_5  { get; set; }
        public double KPI_6  { get; set; }
        public double KPI_7  { get; set; }
        public double KPI_8  { get; set; }
        public double KPI_9  { get; set; }
        public double KPI_10 { get; set; }
        public double KPI_11 { get; set; }
        public double KPI_12 { get; set; }
        public double KPI_13 { get; set; }
        public double KPI_14 { get; set; }
        public double KPI_15 { get; set; }
        public double KPI_16 { get; set; }
        public double KPI_17 { get; set; }
        public double KPI_18 { get; set; }
        public double KPI_19 { get; set; }
        public double KPI_20 { get; set; }
        public double KPI_21 { get; set; }
        public double KPI_22 { get; set; }
        public double KPI_23 { get; set; }
        public double KPI_24 { get; set; }
        public double KPI_25 { get; set; }
        public double KPI_26 { get; set; }
        public double KPI_27 { get; set; }
        public double KPI_28 { get; set; }
        public double KPI_29 { get; set; }
        public double KPI_30 { get; set; }
        public double KPI_31 { get; set; }
        public double KPI_32 { get; set; }
        public double KPI_33 { get; set; }
        public double KPI_34 { get; set; }
        public double KPI_35 { get; set; }
        public double KPI_36 { get; set; }
        public double KPI_37 { get; set; }
        public double KPI_38 { get; set; }
        public double KPI_39 { get; set; }
        public double KPI_40 { get; set; }
        public double KPI_41 { get; set; }
        public double KPI_42 { get; set; }
    }
    //end async data
}
