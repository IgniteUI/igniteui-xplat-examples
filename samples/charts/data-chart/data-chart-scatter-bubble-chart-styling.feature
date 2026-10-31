# Styled BubbleSeries: every bubble filled rgb(67, 162, 250) at 50% marker fill opacity with a black 1px outline.
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
Then this series will have all bubbles with fill #43A2FA and outline #000000
Then this series will have markers with marker fill opacity 0.5
Then this series will have markers with thickness 1
