# Column chart of TemperatureAnnotatedData (Month, Temperature) with crosshairs, BrightenSpecific highlighting and auto
# callouts on every point. Hovering Jun brightens only the Jun column (palette #8BDC5C) and puts the x crosshair on
# Jun; every month is called out with its Temperature. The final value annotation is not asserted: the chart uses
# computedPlotAreaMarginMode Series, and the final value steps do not yet account for the effective viewport.
Then this category chart will have 1 visible series of Column type
When the user hovers over category point with label Jun
When we are talking about the series at index 0
Then this series will have main shapes with label Jun bright filled #8BDC5C and bright outline #8BDC5C
Then this series will have labeled shapes with fill #8BDC5C and outline #8BDC5C at the following labels: Jan,Feb,Mar,Apr,May,Jul,Aug,Sep,Oct,Nov,Dec
When we are talking about the CrosshairLayer layer
And we are talking about the axis with name xAxis
Then the crosshair will have annotation labels with values: Jun
When we are talking about the CalloutLayer layer
Then this callout layer will have annotations with the following properties:
  | X  | Y  | Label |
  | 0  | 27 | 27    |
  | 1  | 25 | 25    |
  | 2  | 21 | 21    |
  | 3  | 19 | 19    |
  | 4  | 16 | 16    |
  | 5  | 13 | 13    |
  | 6  | 14 | 14    |
  | 7  | 15 | 15    |
  | 8  | 19 | 19    |
  | 9  | 22 | 22    |
  | 10 | 26 | 26    |
  | 11 | 30 | 30    |
