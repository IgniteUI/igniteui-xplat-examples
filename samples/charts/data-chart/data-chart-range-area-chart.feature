# RangeAreaSeries: monthly low-high temperature band for Los Angeles and New York.
Then this legend will have items with text: Los Angeles,New York
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
When we are talking about the axis with name yAxis
Then this axis title will display text 'Temperature (in Celsius)'
When we are talking about the series with name rangeAreaSeries1
Then this series shapes will match category values within small tolerance:
  | Low  | High |
  | 7.8  | 28.3 |
  | 5.6  | 31.1 |
  | 8.3  | 27.8 |
  | 10.6 | 33.9 |
  | 13.9 | 35   |
  | 16.1 | 36.7 |
  | 15.6 | 33.3 |
  | 15.6 | 36.7 |
  | 16.1 | 43.9 |
  | 11.1 | 38.3 |
  | 6.7  | 32.8 |
  | 5.6  | 28.9 |
When we are talking about the series with name rangeAreaSeries2
Then this series shapes will match category values within small tolerance:
  | Low  | High |
  | -6.6 | 10.6 |
  | -9.9 | 7.8  |
  | -3.8 | 12.2 |
  | 2.2  | 11.7 |
  | 1.1  | 19.4 |
  | 10.6 | 23.3 |
  | 19.4 | 27.2 |
  | 16.7 | 25.6 |
  | 8.9  | 22.8 |
  | 0    | 17.8 |
  | -1   | 17.8 |
  | -6.6 | 8.3  |
