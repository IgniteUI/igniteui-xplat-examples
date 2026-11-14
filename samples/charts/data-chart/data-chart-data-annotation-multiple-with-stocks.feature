# Multiple data annotation layers on StockTesla candlesticks: market-event strips on the top axis, 52-week low/high
# lines, growth/decline trend lines, and stock split / earnings miss / earnings beat slices on the bottom index axis.
Given the sample does not alter its data's casing
Then this chart will have a title with attributes:
  | Text |
  | This Data Chart has multiple Data Annotation Layers bound to data that annotates important events and patterns in stock prices. |
When we are talking about the series with name series1
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2019-01-10 | 20.4 | 23 | 19.8 | 23 |
  | 2020-09-21 | 127.3 | 154 | 120.2 | 149.8 |
  | 2022-07-13 | 223 | 255 | 216.2 | 237 |
  | 2025-04-28 | 243.5 | 294.9 | 222.8 | 285.9 |
# The layer fills its shapes with its brush at its default 0.15 area fill opacity (alpha 0x26).
Then the annotation layer 'StripLayer' will have shapes with the following styles
  | Brush | ShapeOutline |
  | #26000000 | black |
# Each strip's center label sits at the midpoint of its Start and End on the category axis.
Then the axis named 'xAxisTop' will have data annotation labels as follows:
  | Position | Text |
  | 42.5 | Covid - Market Crash |
  | 122 | Fed Rate Up  0.25 - 5.25% |
  | 197.5 | Fed Rate Down 5.25% to 4.45% |
# The overlay text is not in the exported visual data, so no step can read it; it is not asserted.
Then the data annotation line layer named 'LineLayer52WeekRange' will have linear annotations as follows:
  | Orientation | StartX | StartY | EndX | EndY |
  | Horizontal | 190 | 138 | 230 | 138 |
  | Horizontal | 190 | 481 | 230 | 481 |
# Each line labels its start and end with the plain value, both of which render; the labels are read top to bottom.
Then the axis named 'yAxisRight' will have data annotation labels as follows:
  | Position | Text |
  | 481 | 481 |
  | 481 | 481 |
  | 138 | 138 |
  | 138 | 138 |
# Sloped lines have no line position, so they are listed in the layer's data order.
Then the data annotation line layer named 'LineLayerGrowthAndDecline' will have linear annotations as follows:
  | Orientation | StartX | StartY | EndX | EndY |
  | Sloped | 48 | 25 | 105 | 250 |
  | Sloped | 108 | 440 | 155 | 210 |
# Slice positions are category indexes on xAxisBottom.
Then the data annotation slice layer named 'SliceLayerStockSplit' will have vertical lines at the following positions: 61, 126
Then the annotation layer 'SliceLayerStockSplit' will have shapes with the following styles
  | ShapeOutline |
  | dodgerblue |
Then the data annotation slice layer named 'SliceLayerEarningsMissAnnotations' will have vertical lines at the following positions: 9, 179, 215
Then the annotation layer 'SliceLayerEarningsMissAnnotations' will have shapes with the following styles
  | ShapeOutline |
  | red |
Then the data annotation slice layer named 'SliceLayerEarningsBeatAnnotations' will have vertical lines at the following positions: 28, 86, 155
Then the annotation layer 'SliceLayerEarningsBeatAnnotations' will have shapes with the following styles
  | ShapeOutline |
  | green |
Then the axis named 'xAxisBottom' will have data annotation labels as follows:
  | Position | Text |
  | 9 | Earnings Miss |
  | 28 | Earnings Beat |
  | 61 | Stock Split 5-1 |
  | 86 | Earnings Beat |
  | 126 | Stock Split 3-1 |
  | 155 | Earnings Beat |
  | 179 | Earnings Miss |
  | 215 | Earnings Miss |
