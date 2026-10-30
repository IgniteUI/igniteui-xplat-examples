# Axis annotations with rounded corners: auto callouts on every America value, a final value layer (corner radius 10,
# padding 10) on the y axis and a crosshair whose x/y axis annotations have corner radius 10 and y precision 0.
When we are talking about the series with name lineSeries1
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the axis with name xAxis
# With no interval set, a category axis shows at most 10 labels; the 12 years (2018 is listed twice) are labelled every other one.
Then this axis will have labels visible with these values: 2009, 2011, 2013, 2015, 2017, 2019
When we are talking about the axis with name yAxis
Then this axis title will display text 'TWh'
When we are talking about annotation layer CalloutLayer1 targeting series lineSeries1
# Auto callout labels use the default value formatting, which leaves integers unchanged.
# Callout padding is not asserted: the visual data carries the callout's background but not its text's measured size.
Then this callout layer will have annotations with the following properties:
  | X | Y | Label |
  | 0 | 19 | 19 |
  | 1 | 24 | 24 |
  | 2 | 28 | 28 |
  | 3 | 26 | 26 |
  | 4 | 38 | 38 |
  | 5 | 31 | 31 |
  | 6 | 19 | 19 |
  | 7 | 52 | 52 |
  | 8 | 50 | 50 |
  | 9 | 34 | 34 |
  | 10 | 34 | 34 |
  | 11 | 38 | 38 |
When we are talking about the axis with name yAxis
Then the axis will have 1 annotation label
Then the final value layer will have the annotation labels with the following properties:
  | Position | Text |
  | 38 | 38 |
When we are talking about the series with name lineSeries1
When the user hovers over category point with label 2016
When we are talking about the series with name CrosshairLayer
When we are talking about the axis with name yAxis
Then the crosshair will have annotation labels with values: 52
When we are talking about the axis with name xAxis
Then the crosshair will have annotation labels with values: 2016
