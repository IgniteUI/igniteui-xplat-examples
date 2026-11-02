# Data tooltip on a two-stock candle chart (MultipleStocks = Google then Amazon) showing Open/Close/High/Low/Change.
# Prices are fetched at runtime, so the grouped tooltip is pinned by its series rows (titles from MultipleStocks).
Then this financial chart will have 2 series visible
When the user hovers over the center of the chart
Then the data tooltip named DataToolTipLayer will have a visible tooltip
# CALIBRATE: total row count (header + 2 series; financial tooltips are not expected to add a summary row).
Then the data tooltip named DataToolTipLayer will contain one grouped tooltip with the following values:
  | C1-Text | RowType |
  | [NULL]  | Header  |
  | Google  | Series  |
  | Amazon  | Series  |
