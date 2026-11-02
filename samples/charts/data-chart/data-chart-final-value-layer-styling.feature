# Final value layer styling: the last America value (38) is annotated on the y axis with an Orange background,
# Black text and a Black outline.
Then this chart will have a subtitle with attributes:
  | Text |
  | Renewable Energy Generated |
When we are talking about the series with name series1
Then this series shapes will match the America column of sample data named EnergyRenewableGeneration within small tolerance
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
When we are talking about the axis with name yAxis
Then this axis title will display text 'TWh'
Then the axis will have 1 annotation label
Then the final value layer will have the annotation labels with the following properties:
  | Position | Text |
  | 38 | 38 |
Then this axis will have annotation labels with these attributes:
  | Background | Foreground | Outline |
  | Orange | Black | Black |
