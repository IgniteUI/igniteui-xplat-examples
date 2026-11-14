# Data tooltip in currency mode with en-GB culture (British pounds), Close/Change/Value only, labels hidden, over a
# two-stock candle chart (MultipleStocks = Google then Amazon). MultipleStocks loads fixed historical files, so each
# series row pins the hovered close in pounds and its change.
Then this financial chart will have 2 series visible
When the user hovers over the center of the chart
Then the data tooltip named DataToolTipLayer will have a visible tooltip
Then the data tooltip named DataToolTipLayer will contain one grouped tooltip with the following values:
  | C1-Text | C2-Text | C3-Text | RowType |
  | [NULL] | [NULL] | [NULL] | Header |
  | Google | £718.8 | +2.2% | Series |
  | Amazon | £579.0 | +4.1% | Series |
