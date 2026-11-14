# Data legend styling over a single StockGoogle candle series: label text #4A4A4A, value text #00AD03 Verdana Bold,
# units text "K" #00AD03 Verdana Bold, currency value format, with yAxisTitle "Thousands of Dollars ($)".
Then this financial chart will have yAxis title with 'Thousands of Dollars ($)' text
Then this financial chart will have 1 series visible
# StockGoogle row index 2 is 2014-03-03: Open 569.9, High 587.3, Low 564.1, Close 569.7 (Change is close against open: -0.2 / 569.9 = -0.0%).
When the user hovers at the bottom of the chart at category label number 2
# The series row: title, then label/value/units for Open, High, Low and Close, then the change. Currency mode
# renders the values with one decimal; colors, fonts and weights are taken directly from the sample JSON.
Then this data legends rows 2 will have these columns with styling attributes:
  | C1-Text | C2-Text | C2-TextColor | C3-Text | C3-TextColor | C3-FontFamily | C3-FontWeight | C4-Text | C4-TextColor | C4-FontFamily | C4-FontWeight | C5-Text | C5-TextColor | C6-Text | C6-TextColor | C6-FontFamily | C6-FontWeight | C7-Text | C7-TextColor | C7-FontFamily | C7-FontWeight | C8-Text | C8-TextColor | C9-Text | C9-TextColor | C9-FontFamily | C9-FontWeight | C10-Text | C10-TextColor | C10-FontFamily | C10-FontWeight | C11-Text | C11-TextColor | C12-Text | C12-TextColor | C12-FontFamily | C12-FontWeight | C13-Text | C13-TextColor | C13-FontFamily | C13-FontWeight | C14-Text | RowType |
  | FinancialPrice1 | O: | #4A4A4A | $569.9 | #00AD03 | Verdana | Bold | K | #00AD03 | Verdana | Bold | H: | #4A4A4A | $587.3 | #00AD03 | Verdana | Bold | K | #00AD03 | Verdana | Bold | L: | #4A4A4A | $564.1 | #00AD03 | Verdana | Bold | K | #00AD03 | Verdana | Bold | C: | #4A4A4A | $569.7 | #00AD03 | Verdana | Bold | K | #00AD03 | Verdana | Bold | -0.0% | Series |
