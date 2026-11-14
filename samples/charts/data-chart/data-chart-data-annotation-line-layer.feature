# DataAnnotationLineLayer: two horizontal purple lines marking the 52-week low (138) and high (481) with their values on
# the right axis, and two sloped lines marking the growth (48,25)-(105,250) and decline (108,440)-(155,210) patterns.
Given the sample does not alter its data's casing
Then this chart will have a title with attributes:
  | Text |
  | The Data Chart demonstrates the DataAnnotationLineLayer bound to data that annotates stock growth and decline patterns. |
When we are talking about the series with name series1
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2019-01-10 | 20.4 | 23 | 19.8 | 23 |
  | 2020-05-12 | 46.7 | 56.2 | 46.5 | 54 |
  | 2022-01-10 | 357.8 | 402.7 | 326.7 | 352.7 |
  | 2024-04-24 | 156.7 | 168 | 138.8 | 162.1 |
  | 2025-04-28 | 243.5 | 294.9 | 222.8 | 285.9 |
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
