# Stacked100SplineAreaSeries of ContinentsBirthRate: curved areas of each continent share, summing to 100%.
Then this legend will have items with text: Asia,Africa,Europe,North America,South America
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020
When we are talking about the axis with name yAxis
# CALIBRATE: the stacked-100 value axis is auto-ranged; 0-100 with the configured interval 20 and "{0}%" format is assumed.
Then this axis will have labels visible with these values: 100%, 80%, 60%, 40%, 20%, 0%
# Fragment shapes are read back as the stacked (cumulative) top of each fragment, in fragment order.
When we are talking about the series with name s1
Then this series shapes will match category values within large tolerance:
  | Value |
  | 63.92 |
  | 62.96 |
  | 66.67 |
  | 62.6  |
  | 65.41 |
  | 61.72 |
  | 57.78 |
  | 55.15 |
When we are talking about the series with name s2
Then this series shapes will match category values within large tolerance:
  | Value |
  | 77.32 |
  | 74.07 |
  | 80.83 |
  | 79.67 |
  | 83.46 |
  | 83.59 |
  | 83.7  |
  | 86.76 |
When we are talking about the series with name s3
Then this series shapes will match category values within large tolerance:
  | Value |
  | 87.63 |
  | 87.96 |
  | 90    |
  | 89.43 |
  | 90.23 |
  | 89.84 |
  | 91.11 |
  | 91.91 |
When we are talking about the series with name s4
Then this series shapes will match category values within large tolerance:
  | Value |
  | 91.75 |
  | 91.67 |
  | 92.5  |
  | 91.87 |
  | 92.48 |
  | 92.97 |
  | 94.07 |
  | 94.85 |
When we are talking about the series with name s5
Then this series shapes will match category values within large tolerance:
  | Value |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
