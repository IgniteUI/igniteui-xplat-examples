# StackedSplineAreaSeries of ContinentsBirthRate: curved stacked areas per continent, 0-140 m value axis.
Then this legend will have items with text: Asia,Africa,Europe,North America,South America
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020
When we are talking about the axis with name yAxis
Then this axis title will display text 'Millions of Births'
Then this axis will have labels visible with these values: 140 m, 120 m, 100 m, 80 m, 60 m, 40 m, 20 m, 0 m
# Fragment shapes are read back as the stacked (cumulative) top of each fragment, in fragment order.
When we are talking about the series with name s1
Then this series shapes will match category values within large tolerance:
  | Value |
  | 62    |
  | 68    |
  | 80    |
  | 77    |
  | 87    |
  | 79    |
  | 78    |
  | 75    |
When we are talking about the series with name s2
Then this series shapes will match category values within large tolerance:
  | Value |
  | 75    |
  | 80    |
  | 97    |
  | 98    |
  | 111   |
  | 107   |
  | 113   |
  | 118   |
When we are talking about the series with name s3
Then this series shapes will match category values within large tolerance:
  | Value |
  | 85    |
  | 95    |
  | 108   |
  | 110   |
  | 120   |
  | 115   |
  | 123   |
  | 125   |
When we are talking about the series with name s4
Then this series shapes will match category values within large tolerance:
  | Value |
  | 89    |
  | 99    |
  | 111   |
  | 113   |
  | 123   |
  | 119   |
  | 127   |
  | 129   |
When we are talking about the series with name s5
Then this series shapes will match category values within large tolerance:
  | Value |
  | 97    |
  | 108   |
  | 120   |
  | 123   |
  | 133   |
  | 128   |
  | 135   |
  | 136   |
