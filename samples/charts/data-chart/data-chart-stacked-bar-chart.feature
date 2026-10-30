# StackedBarSeries of EnergyRenewableConsumption: Hydro/Wind/Solar/Other TWh stacked per location (inverted category Y axis).
Then this legend will have items with text: Hydro,Wind,Solar,Other
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: China, Europe, USA, Brazil, Canada
When we are talking about the axis with name xAxis
Then this axis title will display text 'TWh'
# Fragment shapes are read back as the stacked (cumulative) end of each fragment, in fragment order.
# CALIBRATE: the category Y axis is inverted; the tables list values in data order (China first) - confirm the analyzer reads them in that order.
When we are talking about the series with name s1
Then this series shapes will match category values within small tolerance:
  | Value  |
  | 1269.5 |
  | 632.54 |
  | 271.16 |
  | 399.3  |
  | 381.98 |
When we are talking about the series with name s2
Then this series shapes will match category values within small tolerance:
  | Value   |
  | 1674.7  |
  | 1093.84 |
  | 574.56  |
  | 455.13  |
  | 416.15  |
When we are talking about the series with name s3
Then this series shapes will match category values within small tolerance:
  | Value   |
  | 1897.7  |
  | 1247.84 |
  | 682.56  |
  | 460.63  |
  | 420.45  |
When we are talking about the series with name s4
Then this series shapes will match category values within small tolerance:
  | Value   |
  | 2000.5  |
  | 1468.14 |
  | 760.9   |
  | 516.88  |
  | 431.26  |
