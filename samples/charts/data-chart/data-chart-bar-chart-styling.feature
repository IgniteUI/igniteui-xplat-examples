# Styled bar chart: magenta bars (fill rgb(201,56,207), outline rgb(133,6,138), thickness 2), an x axis fixed at
# 0..80 by 20 with '{0}%' labels, and transparent value callouts in rgb(133,6,138) placed to the right of each bar.
When we are talking about the series with name BarSeries1
Then this series shapes will match the Percent column of sample data named OnlineShoppingSearches within small tolerance in reverse order
Then this series will have main shapes with fill #C938CF
Then this series will have main shapes with outline #85068A
Then this series will have main shapes with thickness 2
When we are talking about the axis with name xAxis
Then this axis range will have a minimum value of 0 and a maximum value of 80
Then this axis will have labels visible with these values: 0%, 20%, 40%, 60%, 80%
When we are talking about the axis with name yAxis
Then this axis will contain a labels for Amazon, Search Engines, Retailer Sites, Marketplaces, Brand Website, Comparison Sites, Social Media, Other
When we are talking about annotation layer CalloutLayer1 targeting series BarSeries1
Then this callout layer will have annotations with the following properties:
  | Y | X | Label | TextColor | RelativeLocation |
  | 0 | 63 | 63 | #85068A | CenteredRight |
  | 1 | 48 | 48 | #85068A | CenteredRight |
  | 2 | 33 | 33 | #85068A | CenteredRight |
  | 3 | 25 | 25 | #85068A | CenteredRight |
  | 4 | 21 | 21 | #85068A | CenteredRight |
  | 5 | 10 | 10 | #85068A | CenteredRight |
  | 6 | 8 | 8 | #85068A | CenteredRight |
  | 7 | 2 | 2 | #85068A | CenteredRight |
Then this callout layer will have callouts drawn right of and vertically centered on bar shapes
