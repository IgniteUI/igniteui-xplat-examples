# Stacked100BarSeries of EnergyRenewableConsumption: each location bar normalised to 100% across Hydro/Wind/Solar/Other.
Then this legend will have items with text: Hydro,Wind,Solar,Other
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: China, Europe, USA, Brazil, Canada
When we are talking about the axis with name xAxis
Then this axis title will display text 'TWh'
# Fragment shapes are read back as the stacked (cumulative) end of each fragment, in fragment order.
# The category Y axis is inverted and shapes are read in axis order, so the tables list the data back to front (Canada first).
When we are talking about the series with name s1
Then this series shapes will match category values within small tolerance:
  | Value |
  | 88.57 |
  | 77.25 |
  | 35.64 |
  | 43.08 |
  | 63.46 |
When we are talking about the series with name s2
Then this series shapes will match category values within small tolerance:
  | Value |
  | 96.5  |
  | 88.05 |
  | 75.51 |
  | 74.51 |
  | 83.71 |
When we are talking about the series with name s3
Then this series shapes will match category values within small tolerance:
  | Value |
  | 97.49 |
  | 89.12 |
  | 89.7  |
  | 84.99 |
  | 94.86 |
When we are talking about the series with name s4
Then this series shapes will match category values within small tolerance:
  | Value |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
