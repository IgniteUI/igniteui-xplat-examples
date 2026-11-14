# Format specifiers: legend and tooltip values as EUR currency (en-GB, 2 fraction digits), y-axis labels as EUR
# currency (0 fraction digits) and x-axis labels as en-GB long dates, over a two-stock candle chart
# (MultipleStocks = Google then Amazon). Prices/dates are fetched at runtime, so label/value text cannot be derived
# offline; the series rows are asserted by title and the formatted text needs new steps (see report).
Then this financial chart will have 2 series visible
When the user hovers over the center of the chart
Then this data legends rows 2,3 will have these columns with styling attributes:
  | C1-Text | RowType |
  | Google  | Series  |
  | Amazon  | Series  |
