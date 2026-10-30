# Custom callouts: CalloutLayer1 is bound to CountryRenewableCallouts and places one callout per row at (Index, Value)
# labelled with Label (20/10 padding, corner radius 5) over a line of CountryRenewableElectricity.America. A final value
# layer annotates the last value and a crosshair (precision 0) annotates both axes on hover.
When we are talking about the series with name lineSeries1
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the axis with name xAxis
# With no interval set, a category axis shows at most 10 labels; the 12 years (2018 is listed twice) are labelled every other one.
Then this axis will have labels visible with these values: 2009, 2011, 2013, 2015, 2017, 2019
When we are talking about annotation layer CalloutLayer1 targeting series lineSeries1
# Callout padding is not asserted: the visual data carries the callout's background but not its text's measured size.
Then this callout layer will have annotations with the following properties:
  | X | Y | Label |
  | 0 | 19 | 19 TWh |
  | 1 | 24 | 24 TWh |
  | 2 | 28 | 28 TWh |
  | 3 | 26 | 26 TWh |
  | 4 | 38 | 38 TWh |
  | 5 | 31 | 31 TWh |
  | 6 | 19 | 19 TWh |
  | 7 | 52 | 52 TWh |
  | 8 | 50 | 50 TWh |
  | 9 | 34 | 34 TWh |
  | 10 | 34 | 38 TWh |
  | 11 | 38 | 38 TWh |
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
