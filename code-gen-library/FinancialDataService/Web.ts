//begin imports
//end imports

//begin async data
export class FinancialDataService extends Array<FinancialDataDetails> {
      
    /** gets Google stock OHLC prices from a .JSON file */
    public static async fetchData(): Promise<FinancialDataDetails[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/FinancialData1000.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      return new Promise<FinancialDataDetails[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    public static convertData(jsonData: any[]): FinancialDataDetails[] {
      let stockItems: FinancialDataDetails[] = [];

      for (let json of jsonData) {
        let item = new FinancialDataDetails({
          Category: json.Category,
          Type: json.Type,
          Contract: json.Contract,
          Settlement: json.Settlement,
          Region: json.Region,
          Country: json.Country,
          Risk: json.Risk,
          Sector: json.Sector,
          Issuer: json.Issuer,
          Maturity: json.Maturity,
          IndGroup: json.IndGroup,
          IndSector: json.IndSector,
          IndCategory: json.IndCategory,
          Cpn: json.Cpn,

          Spread: json.Spread,
          Open: json.Open,
          Price: json.Price,
          Buy: json.Buy,
          Sell: json.Sell,
          Change: json.Change,
          ChangePercent: json.ChangePercent,
          High: json.High,
          Low: json.Low,
          YearlyHigh: json.YearlyHigh,
          YearlyLow: json.YearlyLow,
          YearlyStart: json.YearlyStart,
          YearlyChange: json.YearlyChange,
          ZV_SPREAD: json.ZV_SPREAD,
          KRD_3YR: json.KRD_3YR,
          KRD_5YR: json.KRD_5YR,
          KRD_1YR: json.KRD_1YR,
          ID: json.ID
        });
        stockItems.push(item);

      }

      return stockItems;
    }
  }

export class FinancialDataDetails {
    public constructor(init: Partial<FinancialDataDetails>) {
        Object.assign(this, init);
    }

    public Category: string;
    public Type: string;
    public Spread: number;
    public Open: number;
    public Price: number;
    public Buy: number;
    public Sell: number;
    public Change: number;
    public ChangePercent: number;
    public Volume: number;
    public High: number;
    public Low: number;
    public YearlyHigh: number;
    public YearlyLow: number;
    public YearlyStart: number;
    public YearlyChange: number;
    public Settlement: string;
    public Contract: string;
    public Region: string;
    public Country: string;
    public Risk: string;
    public Sector: string;
    public Currency: string;
    public Security: string;
    public Issuer: string;
    public Maturity: string;
    public IndGroup: string;
    public IndSector: string;
    public IndCategory: string;
    public Cpn: string;
    public KRD_3YR: number;
    public ZV_SPREAD: number;
    public KRD_5YR: number;
    public KRD_1YR: number;
    public ID: number;

}
//end async data