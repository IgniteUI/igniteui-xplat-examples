# Data legend in currency mode with en-GB culture (British pounds) showing only Close/Change/Value with labels hidden,
# over a two-stock candle chart (MultipleStocks = Google then Amazon). Prices are fetched at runtime, so only the
# series rows (titles from MultipleStocks) are asserted; the pound-symbol formatting needs a new step (see report).
Then this financial chart will have 2 series visible
When the user hovers over the center of the chart
Then this data legends rows 2,3 will have these columns with styling attributes:
  | C1-Text | RowType |
  | Google  | Series  |
  | Amazon  | Series  |
