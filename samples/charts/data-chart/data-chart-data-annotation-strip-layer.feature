# DataAnnotationStripLayer: black strips over index ranges 40-45, 100-144 and 190-205 marking market events, each
# labelled at its center on the top axis.
Then this chart will have a title with attributes:
  | Text |
  | This Data Chart demonstrates the DataAnnotationStripLayer bound to data that markert events affecting stock prices. |
When we are talking about the series with name series1
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2019-01-10 | 20.4 | 23 | 19.8 | 23 |
  | 2020-02-21 | 51.9 | 63 | 49 | 60.1 |
  | 2021-10-20 | 267 | 292.6 | 265.5 | 288.6 |
  | 2024-04-24 | 156.7 | 168 | 138.8 | 162.1 |
  | 2025-04-28 | 243.5 | 294.9 | 222.8 | 285.9 |
Then the annotation layer 'StripLayer' will have shapes with the following styles
  | Brush | ShapeOutline |
  | black | black |
# CALIBRATE: strip center label positions are the midpoints of Start/End on the category axis
Then the axis named 'xAxisTop' will have data annotation labels as follows:
  | Position | Text |
  | 42.5 | Covid - Market Crash |
  | 122 | Fed Rate Up  0.25 - 5.25% |
  | 197.5 | Fed Rate Down 5.25% to 4.45% |
