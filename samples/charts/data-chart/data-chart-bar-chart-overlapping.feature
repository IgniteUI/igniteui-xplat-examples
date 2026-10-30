# Overlapping bars: two bar series on two category y axes over the same data (gap 0.25 vs gap 1.0) so the narrower
# 'Top Choice' bar sits on top of the 'Sum of Top 3 Choices' bar, with value callouts to the right of each bar.
When we are talking about the series with name BarSeries1
Then this series shapes will match the TopChoices column of sample data named RoadblocksToSuccess within small tolerance
When we are talking about the series with name BarSeries2
Then this series shapes will match the FirstChoice column of sample data named RoadblocksToSuccess within small tolerance
When we are talking about the axis with name yAxis2
Then this axis will contain a labels for Poor Prioritization of Tasks, Poor Data Literacy, Lack of Relevant Skills, Lack of Resources, Cultural Challenges
When we are talking about the axis with name xAxis
Then this axis range will have a minimum value of 0 and a maximum value of 50
Then this axis will have a line with gray color
Then this axis will have a line with thickness of 2 pixels
Then this axis will have tickmarks with length 5
# CALIBRATE: the enhanced interval over 0..50 (10 expected)
# With no interval set, enhanced interval management labels 0..50 every 5% at this width.
Then this axis will have labels visible with these values: 0%, 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%
Then this legend will have items with text: Sum of Top 3 Choices,Top Choice
When we are talking about annotation layer CalloutLayer1 targeting series BarSeries1
# CALIBRATE: neither callout layer names a target series, so each annotates both bar series (10 callouts per layer)
Then this callout layer will have annotations with the following properties:
  | Y | X | Label |
  | 0 | 22 | 22 |
  | 1 | 25 | 25 |
  | 2 | 35 | 35 |
  | 3 | 37 | 37 |
  | 4 | 46 | 46 |
  | 0 | 6 | 6 |
  | 1 | 8 | 8 |
  | 2 | 10 | 10 |
  | 3 | 14 | 14 |
  | 4 | 20 | 20 |
