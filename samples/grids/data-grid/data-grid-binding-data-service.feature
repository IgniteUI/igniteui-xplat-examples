# Grid bound to FinancialDataService (static FinancialData1000.json): the first records render in the text columns in data order.
Then this grid will have data cells with these values in the visible rows:
  | Category    | Type        | Contract | Settlement | Region        |
  | Fuel        | Ethanol     | CFD      | Cash       | Middle East   |
  | Fuel        | Natural Gas | Options  | Credit     | Middle East   |
  | Agriculture | Cotton      | Options  | Cash       | North America |
  | Livestock   | FD Cattle   | Futures  | Loan       | Africa        |
  | Agriculture | Wheat       | Futures  | Cash       | Europe        |
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Category, Type, Contract, Settlement, Region, Country
