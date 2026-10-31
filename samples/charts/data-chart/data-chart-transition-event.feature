# Waterfall chart with transition-in animation (editor button replays it); after the transition the columns settle at the CompanyIncomeData values.
When we wait for chart animations to complete
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
# Replaying the transition ends exactly where it began, so both series' transitions are lengthened to 5 seconds to
# catch the replay running right after the editor's Replay button is clicked; once it settles the columns are back.
When we are talking about the series with name WaterfallSeries1
When this series has transition in duration set to 5000 milliseconds
When we are talking about the series with name WaterfallSeries2
When this series has transition in duration set to 5000 milliseconds
When we disable waiting for animation idle
When we click the 'Replay' row in the property editor panel
Then an animation will be running
When we enable waiting for animation idle
When we wait for chart animations to complete
When we are talking about the series with name WaterfallSeries1
Then this series shapes will match category values within small tolerance:
  | High | Low |
  | 55   | 0   |
  | 55   | 45  |
  | 45   | 35  |
  | 35   | 28  |
  | 28   | 25  |
  | 55   | 25  |
  | 55   | 0   |
