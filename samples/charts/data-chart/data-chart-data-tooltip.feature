# DataToolTipLayer over bubble series: Africa and Europe demographics (death rate x, birth rate y, population radius).
When we are talking about the axis with name xAxis
Then this axis title will display text 'Death Rate'
Then this axis range will have a minimum value of 4 and a maximum value of 16
Then this axis will have labels visible with these values: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
When we are talking about the axis with name yAxis
Then this axis title will display text 'Birth Rate'
Then this axis range will have a minimum value of 0 and a maximum value of 60
Then this axis will have labels visible with these values: 60, 50, 40, 30, 20, 10, 0
When we are talking about the series with name bubbleSeries1
Then this series will have 54 markers
When we are talking about the series with name bubbleSeries2
Then this series will have 45 markers
When we are talking about the series with name bubbleSeries1
When the user hovers over point at X 4.77 and Y 23.9
# Each scatter series shows its own tooltip, for its item nearest the pointer.
Then the data tooltip named dataToolTipLayer will contain multiple tooltips with the following values:
  | TooltipNumber | BadgeType | C1-Text | C2-Text     | C3-Text | C4-Text     | C5-Text | C6-Text     | C7-Text | C8-Text | RowType |
  | 1             | Circle    | Africa  | Death Rate: | 4.77    | Birth Rate: | 23.9    | Population: | 39.73   | M       | Series  |
  | 2             | Circle    | Europe  | Death Rate: | 6.5     | Birth Rate: | 14.1    | Population: | 4.65    | M       | Series  |
