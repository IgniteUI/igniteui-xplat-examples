# StackedBarSeries of EnergyRenewableConsumption: Hydro/Wind/Solar/Other TWh stacked per location (inverted category Y axis).
Then this legend will have items with text: Hydro,Wind,Solar,Other
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: China, Europe, USA, Brazil, Canada
When we are talking about the axis with name xAxis
Then this axis title will display text 'TWh'
# Fragment shapes are read back as the stacked (cumulative) end of each fragment, in fragment order.
# The category Y axis is inverted and shapes are read in axis order, so the tables list the data back to front (Canada first).
When we are talking about the series with name s1
Then this series shapes will match category values within small tolerance:
  | Value  |
  | 381.98 |
  | 399.3  |
  | 271.16 |
  | 632.54 |
  | 1269.5 |
When we are talking about the series with name s2
Then this series shapes will match category values within small tolerance:
  | Value   |
  | 416.15  |
  | 455.13  |
  | 574.56  |
  | 1093.84 |
  | 1674.7  |
When we are talking about the series with name s3
Then this series shapes will match category values within small tolerance:
  | Value   |
  | 420.45  |
  | 460.63  |
  | 682.56  |
  | 1247.84 |
  | 1897.7  |
When we are talking about the series with name s4
Then this series shapes will match category values within small tolerance:
  | Value   |
  | 431.26  |
  | 516.88  |
  | 760.9   |
  | 1468.14 |
  | 2000.5  |
