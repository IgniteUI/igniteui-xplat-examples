# SalesData (1042 rows) grouped by Country with Sum(Sales) as Sales and sorted by Sales descending: one column per
# country, largest total first. Totals computed from the data: India 64663863.61, UK 58645464.95, Japan 56585004.42,
# Brazil 53344811.13, USA 50453744.95.
Then this category chart will have 1 visible series of Column type
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: India, UK, Japan, Brazil, USA
When we are talking about the series at index 0
Then this series shapes will match category values within small tolerance:
  | Value       |
  | 64663863.61 |
  | 58645464.95 |
  | 56585004.42 |
  | 53344811.13 |
  | 50453744.95 |
# Grouping by Product in the editor regroups the summed sales, still largest first (totals computed from the data).
When we choose 'Product' from the 'Initial Groups' row in the property editor panel
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Vermont, Mandarin, Burlington, Luxe, Royal Oak, Kensington, Marchesa
When we are talking about the series at index 0
Then this series shapes will match category values within small tolerance:
  | Value       |
  | 83506067.45 |
  | 46428200.16 |
  | 42789613.37 |
  | 40515479.05 |
  | 39502847.02 |
  | 29900682.01 |
  | 1050000     |
