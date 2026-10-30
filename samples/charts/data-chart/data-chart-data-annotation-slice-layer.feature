# DataAnnotationSliceLayer: vertical slices on the bottom index axis for stock splits (dodgerblue), earnings misses
# (red) and earnings beats (green), each labelled on the axis in white text.
Then this chart will have a title with attributes:
  | Text |
  | This Data Chart demonstrates the DataAnnotationSliceLayer bound to data that annotates stock splits and earnings miss/beat events. |
When we are talking about the series with name series1
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2019-01-10 | 20.4 | 23 | 19.8 | 23 |
  | 2019-04-11 | 19.2 | 19.7 | 17.4 | 17.9 |
  | 2022-07-13 | 223 | 255 | 216.2 | 237 |
  | 2025-01-03 | 435.9 | 465.3 | 373 | 410.4 |
  | 2025-04-28 | 243.5 | 294.9 | 222.8 | 285.9 |
# CALIBRATE: slice positions are category indexes on xAxisBottom; confirm unscaling on a centered financial axis
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
