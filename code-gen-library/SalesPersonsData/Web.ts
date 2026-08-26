//begin imports
//end imports

//begin async data
export class SalesPersonsData extends Array<SalesPerson> {

    public constructor(count?: number) {
        super();
        if (count === undefined) count = 8000;

        const firstNames = ["Kyle","Gina","Irene","Katie","Michael","Oscar","Ralph","Torrey","William","Bill","Daniel","Frank","Brenda","Danielle","Fiona","Howard","Jack","Larry","Holly","Jennifer","Liz","Pete","Steve","Vince","Zeke"];
        const lastNames  = ["Adams","Crowley","Ellis","Gable","Irvine","Keefe","Mendoza","Owens","Rooney","Waddell","Thomas","Betts","Doran","Fitzgerald","Holmes","Jefferson","Landry","Newberry","Perez","Spencer","Vargas","Grimes","Edwards","Stark","Cruise","Fitz","Chief","Blanc","Perry","Stone","Williams","Lane","Jobs"];
        const territories = ["Australia","Canada","Egypt","Greece","Italy","Kenya","Mexico","Oman","Qatar","Sweden","Uruguay","Yemen","Bulgaria","Denmark","France","Hungary","Japan","Latvia","Netherlands","Portugal","Russia","Turkey","Venezuela","Zimbabwe"];
        const today = new Date();

        for (let i = 0; i < count; i++) {
            const firstIndex = Math.round(Math.random() * (firstNames.length - 1));
            const item = new SalesPerson();
            item.Index = i;
            item.FirstName = firstNames[firstIndex];
            item.LastName = lastNames[Math.round(Math.random() * (lastNames.length - 1))];
            item.Name = item.FirstName + item.LastName;
            item.ImageName = "";
            item.Territory = territories[Math.round(Math.random() * (territories.length - 1))];
            item.AvgSale = Math.round(Math.random() * 800) + 200.0;
            item.Change = Math.random() * 40.0 - 20.0;
            item.PercentChange = 0;
            item.YearToDateSales = Math.round(Math.random() * 50000);
            item.DateValue = new Date(today.getTime());
            item.DateValue.setDate(item.DateValue.getDate() + Math.round(Math.random() * 500));
            for (let j = 0; j < 43; j++) {
                (item as any)["KPI_" + j] = Math.round(Math.random() * 100.0);
            }
            this.push(item);
        }
    }
}

export class SalesPerson {
    public Index: number;
    public FirstName: string;
    public LastName: string;
    public Name: string;
    public ImageName: string;
    public Territory: string;
    public AvgSale: number;
    public AvgSaleHeat: number;
    public Change: number;
    public PercentChange: number;
    public YearToDateSales: number;
    public DateValue: Date;
}
//end async data
