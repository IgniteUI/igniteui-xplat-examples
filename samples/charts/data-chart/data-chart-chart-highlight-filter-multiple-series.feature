# Highlight filter on three column series: each series' highlight values come from CountryRenewableElectricityFiltered.
# The chart starts with highlightedValuesDisplayMode Hidden; the editor switches it to Overlay.
When we are talking about the series with name ColumnSeries1
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
Then this series will not have any highlight layer shapes
When we are talking about the series with name ColumnSeries2
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
Then this series will not have any highlight layer shapes
When we are talking about the series with name ColumnSeries3
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
Then this series will not have any highlight layer shapes
When we are talking about the axis with name xAxis
# With no interval set, a category axis shows at most 10 labels; the 12 years (2018 is listed twice) are labelled every other one.
Then this axis will have labels visible with these values: 2009, 2011, 2013, 2015, 2017, 2019
When we choose 'Overlay' from the 'Highlight Display Mode: ' row in the property editor panel
When we are talking about the series with name ColumnSeries1
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 26 |
  | 29 |
  | 50 |
  | 48 |
  | 37 |
  | 26 |
  | 55 |
  | 7 |
  | 57 |
  | 23 |
  | 18 |
  | 40 |
When we are talking about the series with name ColumnSeries2
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 14 |
  | 17 |
  | 21 |
  | 20 |
  | 23 |
  | 34 |
  | 38 |
  | 55 |
  | 101 |
  | 112 |
  | 118 |
  | 70 |
When we are talking about the series with name ColumnSeries3
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 12 |
  | 18 |
  | 22 |
  | 20 |
  | 26 |
  | 21 |
  | 12 |
  | 38 |
  | 32 |
  | 19 |
  | 22 |
  | 26 |
