# Data legend bound to a two-stock candle chart (MultipleStocks = Google then Amazon), filtered to the
# Open/Close/High/Low/Change columns. MultipleStocks is fetched at runtime from static.infragistics.com, so
# prices are not derivable offline; the rows are pinned by the series titles set in MultipleStocks (Google, Amazon).
Then this financial chart will have 2 series visible
When the user hovers over the center of the chart
# Columns are compared in order, so the value column is checked beside the title column before it.
Then this data legends rows 2,3 will have these columns with styling attributes:
  | C1-Text | C2-Text | RowType |
  | Google  | O:      | Series  |
  | Amazon  | O:      | Series  |
