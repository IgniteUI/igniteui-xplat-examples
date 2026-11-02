# mergedCellMode Always over FinancialDataService: adjacent equal values merge (records 1-2 share Fuel / Middle East / Saudi Arabia) while Type stays distinct per row.
Then this grid will have data cells with these values in the visible rows:
  | Type        |
  | Ethanol     |
  | Natural Gas |
  | Cotton      |
  | FD Cattle   |
  | Wheat       |
# CALIBRATE: merged-cell count depends on how many rows/columns are visible; 13 is the number of adjacent-equal runs in Category..Country over the first 15 records.
Then this grid will have cells with these values visible and 13 merged cells:
  | Type        | ColumnType |
  | Ethanol     |            |
  | Natural Gas |            |
  | Cotton      |            |
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Category, Type, Contract, Settlement, Region, Country
