# Data tooltip on a two-stock candle chart (MultipleStocks = Google then Amazon) showing Open/Close/High/Low/Change.
# MultipleStocks loads fixed historical files, so each series row pins the hovered candle's OHLC and change.
Then this financial chart will have 2 series visible
When the user hovers over the center of the chart
Then the data tooltip named DataToolTipLayer will have a visible tooltip
Then the data tooltip named DataToolTipLayer will contain one grouped tooltip with the following values:
  | C1-Text | C2-Text | C3-Text | C4-Text | C5-Text | C6-Text | C7-Text | C8-Text | C9-Text | C10-Text | RowType |
  | [NULL] | [NULL] | [NULL] | [NULL] | [NULL] | [NULL] | [NULL] | [NULL] | [NULL] | [NULL] | Header |
  | Google | O: | 703.6 | H: | 718.8 | L: | 699.8 | C: | 718.8 | +2.2% | Series |
  | Amazon | O: | 556.3 | H: | 579.3 | L: | 556.0 | C: | 579.0 | +4.1% | Series |
