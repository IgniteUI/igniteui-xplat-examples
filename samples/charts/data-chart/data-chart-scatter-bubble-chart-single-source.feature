# BubbleSeries over WorldStats: population (log x) vs public debt (log y), bubble radius from GDP per person, with a chart title.
Then this chart will have a title with attributes:
  | Text                               |
  | Population vs. Public Debt vs. GDP |
When we are talking about the axis with name xAxis
Then this axis title will display text 'Population'
Then this axis range will have a minimum value of 100 and a maximum value of 10000000000
When we are talking about the axis with name yAxis
Then this axis title will display text 'Public Debt per GDP (%)'
When we are talking about the series with name bubbleSeries1
Then this series will have markers with type Circle
