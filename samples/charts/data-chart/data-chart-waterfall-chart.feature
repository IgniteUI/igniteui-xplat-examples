# WaterfallSeries of CompanyIncomeData: costs step down from revenue to total costs; a second purple series shows net income.
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Revenue, Expenses, Research, Marketing, Administration, Total Costs, Net Income
When we are talking about the axis with name yAxis
Then this axis title will display text 'Millions of Dollars'
Then this axis range will have a minimum value of 0 and a maximum value of 60
When we are talking about the series with name WaterfallSeries1
# Each waterfall column spans from the previous item's value to its own (the first from 0).
Then this series shapes will match category values within small tolerance:
  | High | Low |
  | 55   | 0   |
  | 55   | 45  |
  | 45   | 35  |
  | 35   | 28  |
  | 28   | 25  |
  | 55   | 25  |
  | 55   | 0   |
When we are talking about the series with name WaterfallSeries2
Then this series will have visible main shapes at label Net Income
Then this series will have main shapes with fill #7446B9
Then this series will have main shapes with outline #7446B9
