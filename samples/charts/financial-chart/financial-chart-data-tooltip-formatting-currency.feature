# Data tooltip in currency mode with en-GB culture (British pounds), Close/Change/Value only, labels hidden, over a
# two-stock candle chart (MultipleStocks = Google then Amazon). Prices are fetched at runtime; the series rows are
# asserted by title and the pound-symbol formatting needs a new step (see report).
Then this financial chart will have 2 series visible
When the user hovers over the center of the chart
Then the data tooltip named DataToolTipLayer will have a visible tooltip
# CALIBRATE: total row count (header + 2 series; financial tooltips are not expected to add a summary row).
Then the data tooltip named DataToolTipLayer will contain one grouped tooltip with the following values:
  | C1-Text | RowType |
  | [NULL]  | Header  |
  | Google  | Series  |
  | Amazon  | Series  |
