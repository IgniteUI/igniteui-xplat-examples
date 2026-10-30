# DataAnnotationBandLayer: a purple band from (48, 110) to (105, 335) with breadth 170 marking 'Rapid Growth' on the
# StockTesla candlesticks, with 'Growth Start' / 'Growth Stop' data labels on the bottom index axis.
Then this chart will have a title with attributes:
  | Text |
  | Data Chart with DataAnnotationBandLayer bound to data that annotates stock rapid growth |
When we are talking about the series with name series1
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2019-01-10 | 20.4 | 23 | 19.8 | 23 |
  | 2020-05-12 | 46.7 | 56.2 | 46.5 | 54 |
  | 2021-12-09 | 386.9 | 390.9 | 316.8 | 334.6 |
  | 2025-04-28 | 243.5 | 294.9 | 222.8 | 285.9 |
Then the annotation layer 'BandLayer' will have shapes with the following styles
  | Index | Brush | ShapeOutline |
  | 0 | purple | purple |
# CALIBRATE: category positions of the start/end labels (index 48 and 105) on a centered financial category axis
Then the axis named 'xAxisBottom' will have data annotation labels as follows:
  | Position | Text |
  | 48 | Growth Start |
  | 105 | Growth Stop |
