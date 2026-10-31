# Crosshair styling: the crosshair layer draws only its vertical line (horizontal line collapsed) in DodgerBlue.
Then this chart will have a subtitle with attributes:
  | Text |
  | Renewable Energy Generated |
When we are talking about the series with name series1
Then this series shapes will match the America column of sample data named EnergyRenewableGeneration within small tolerance
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
When we are talking about the axis with name yAxis
Then this axis title will display text 'TWh'
When we are talking about the series with name series1
When the user hovers over category point with label 2016
When we are talking about the series with name crosshairLayer
Then this series will have crosshairs with collapsed horizontal line
Then this series will have crosshairs with visible vertical line
Then this series will have crosshair lines with DodgerBlue color
