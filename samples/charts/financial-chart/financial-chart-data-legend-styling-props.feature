# Data legend styling over a single StockGoogle candle series: label text #4A4A4A, value text #00AD03 Verdana Bold,
# units text "K" #00AD03 Verdana Bold, currency value format, with yAxisTitle "Thousands of Dollars ($)".
Then this financial chart will have yAxis title with 'Thousands of Dollars ($)' text
Then this financial chart will have 1 series visible
# StockGoogle row index 2 is 2014-03-03: Open 569.9, High 587.3, Low 564.1, Close 569.7 (Change 569.7 - 567.0 = 2.7).
When the user hovers at the bottom of the chart at category label number 2
# CALIBRATE: column indices within the financial row (title, then label/value/units per included column) and the
# exact currency text ("$569.90") are product-defined; colors/fonts are taken directly from the sample JSON.
Then this data legends rows 2 will have these columns with styling attributes:
  | C2-Text | C2-TextColor | C3-Text | C3-TextColor | C3-FontFamily | C3-FontWeight | C4-Text | C4-TextColor | C4-FontFamily | C4-FontWeight | RowType |
  | O:      | #4A4A4A      | $569.90 | #00AD03      | Verdana       | Bold          | K       | #00AD03      | Verdana       | Bold          | Series  |
