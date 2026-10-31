# DataAnnotationRectLayer: two translucent (0.1) purple rectangles marking a head-and-shoulders pattern
# (85,190)-(140,415) and a price gap (53,75)-(230,80) on the StockTesla candlesticks, all axis labels hidden.
Then this chart will have a title with attributes:
  | Text |
  | This Data Chart demonstrates the DataAnnotationRectLayer bound to data that annotates bearish patterns in stock prices. |
When we are talking about the series with name series1
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2019-01-10 | 20.4 | 23 | 19.8 | 23 |
  | 2020-07-01 | 66.6 | 75.7 | 62.5 | 74.6 |
  | 2021-05-21 | 200.5 | 202.2 | 182.3 | 193.6 |
  | 2022-11-30 | 175.8 | 194.8 | 166.2 | 194.7 |
  | 2025-04-28 | 243.5 | 294.9 | 222.8 | 285.9 |
Then the annotation layer 'RectLayer' will have shapes with the following styles
  | Index | ShapeOutline |
  | 0 | purple |
  | 1 | purple |
Then the axis named 'xAxis' will have no data annotation labels
Then the axis named 'yAxis' will have no data annotation labels
