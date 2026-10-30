# Data tooltip styling over a single StockGoogle candle series: label text #4A4A4A, value text #00AD03 Bold,
# units text "K" #00AD03 Bold, currency values, with yAxisTitle "Thousands of Dollars ($)".
Then this financial chart will have yAxis title with 'Thousands of Dollars ($)' text
Then this financial chart will have 1 series visible
# StockGoogle row index 2 is 2014-03-03: Open 569.9, High 587.3, Low 564.1, Close 569.7 (Change 569.7 - 567.0 = 2.7).
When the user hovers at the bottom of the chart at category label number 2
Then the data tooltip named DataToolTipLayer will have a visible tooltip
# CALIBRATE: column indices within the financial row, the currency text ("$569.90") and the row count
# (header + 1 series) are product-defined; colors/weights are taken directly from the sample JSON.
Then the data tooltip named DataToolTipLayer will contain one grouped tooltip with the following values:
  | C2-Text | C2-TextColor | C3-Text | C3-TextColor | C3-FontWeight | C4-Text | C4-TextColor | C4-FontWeight | RowType |
  | [NULL]  | [NULL]       | [NULL]  | [NULL]       | [NULL]        | [NULL]  | [NULL]       | [NULL]        | Header  |
  | O:      | #4A4A4A      | $569.90 | #00AD03      | Bold          | K       | #00AD03      | Bold          | Series  |
