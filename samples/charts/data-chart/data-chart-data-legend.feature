# DataLegend over bubble series: Africa and Europe demographics (death rate x, birth rate y, population radius 10..50)
# with the data legend restricted to the BirthRate and DeathRate columns and '%' units.
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
# The legend shows the item nearest the pointer in each series. Each label column ends in a space, so the
# row text has two spaces after each label.
Then this data legend will have data rows with the following values:
  | BadgeType | FullText                                       | RowType |
  | Circle    | Africa Death Rate:  4.77 % Birth Rate:  23.9 % | Series  |
  | Circle    | Europe Death Rate:  6.50 % Birth Rate:  14.1 % | Series  |
