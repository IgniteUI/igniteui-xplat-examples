# Stacked100ColumnSeries of OnlineTrafficByDevice: Desktop/Mobile/Tablet share of traffic per category, each column 100%.
Then this legend will have items with text: Desktop,Mobile,Tablet
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Apparel, Beauty, Travel, Grocery, Energy, Home Supply, Financial
# Fragment shapes are read back as the stacked (cumulative) top of each fragment, in fragment order.
When we are talking about the series with name s1
Then this series shapes will match category values within small tolerance:
  | Value |
  | 27    |
  | 29    |
  | 41    |
  | 37    |
  | 58    |
  | 35.35 |
  | 58    |
When we are talking about the series with name s2
Then this series shapes will match category values within small tolerance:
  | Value |
  | 93    |
  | 95    |
  | 92    |
  | 94    |
  | 97    |
  | 91.92 |
  | 97    |
When we are talking about the series with name s3
Then this series shapes will match category values within small tolerance:
  | Value |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
