# Callout styling: auto callouts on the America line with #8961A9 leader/outline/text, white background, 1px stroke.
When we are talking about the series with name lineSeries1
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
Then this series will have main shapes with outline #8961A9
When we are talking about the axis with name xAxis
# With no interval set, a category axis shows at most 10 labels; the 12 years (2018 is listed twice) are labelled every other one.
Then this axis will have labels visible with these values: 2009, 2011, 2013, 2015, 2017, 2019
When we are talking about the axis with name yAxis
Then this axis title will display text 'TWh'
When we are talking about annotation layer CalloutLayer1 targeting series lineSeries1
# CALIBRATE: auto callout label text uses the product's default value formatting (integers expected unchanged)
Then this callout layer will have annotations with the following properties:
  | X | Y | Label | Background | TextColor | LabelOutline | LabelOutlineThickness | LeaderBrush |
  | 0 | 19 | 19 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 1 | 24 | 24 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 2 | 28 | 28 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 3 | 26 | 26 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 4 | 38 | 38 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 5 | 31 | 31 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 6 | 19 | 19 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 7 | 52 | 52 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 8 | 50 | 50 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 9 | 34 | 34 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 10 | 34 | 34 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
  | 11 | 38 | 38 | white | #8961A9 | #8961A9 | 1 | #8961A9 |
