# mergedCellMode Always over FinancialDataService: adjacent equal values merge (records 1-2 share Fuel / Middle East / Saudi Arabia) while Type stays distinct per row.
Then this grid will have data cells with these values in the visible rows:
  | Type        |
  | Ethanol     |
  | Natural Gas |
  | Cotton      |
  | FD Cattle   |
  | Wheat       |
# The merged-cell count depends on how many rows and columns the host's viewport shows.
Then this grid will have cells with these values visible and 14 merged cells:
  | Type        | ColumnType |
  | Ethanol     |            |
  | Natural Gas |            |
  | Cotton      |            |
# Star columns at their minimum widths can overflow the sample's width, so the trailing visible columns depend on the host's viewport.
Then this grid will have the header cells with the following text: Category, Type, Contract, Settlement, Region, Country
