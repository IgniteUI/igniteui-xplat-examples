# VerticalWaterfallSeries of ProfitBridge: the running operating profit total bridged step by step down an inverted
# category y axis, increases filled/outlined green (#2E7D32) and decreases red (#C62828).
When we wait for chart animations to complete
When we are talking about the axis with name yAxis
# The category y axis is inverted, so the steps read top to bottom in data order.
Then this axis will have labels visible with these values: Revenue, Cost of sales, Operating expenses, Research, Other income, Taxes
When we are talking about the axis with name xAxis
Then this axis title will display text 'Thousands of Dollars'
# Only the minimum (0) is fixed; the maximum and interval are automatic, so the value labels are not asserted.
When we are talking about the series with name VerticalWaterfallSeries1
# Each waterfall column spans from the previous item's value to its own (the first from 0). Shapes are read in axis
# order, so the inverted category axis lists them back to front (Taxes first).
Then this series shapes will match category values within small tolerance:
  | High | Low |
  | 300  | 230 |
  | 300  | 260 |
  | 410  | 260 |
  | 720  | 410 |
  | 1200 | 720 |
  | 1200 | 0   |
# A step that raises the total takes the brush/outline; one that lowers it takes the negative brush/outline.
Then this series will have positive shapes with label Revenue filled #2E7D32 and outline #2E7D32
Then this series will have positive shapes with label Other income filled #2E7D32 and outline #2E7D32
Then this series will have negative shapes with label Cost of sales filled #C62828 and outline #C62828
Then this series will have negative shapes with label Operating expenses filled #C62828 and outline #C62828
Then this series will have negative shapes with label Research filled #C62828 and outline #C62828
Then this series will have negative shapes with label Taxes filled #C62828 and outline #C62828
