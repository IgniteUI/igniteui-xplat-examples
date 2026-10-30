# Auto label rotation: long month names on the category x axis are rotated (and the margin expanded) instead of
# being dropped, because shouldConsiderAutoRotationForInitialLabels / shouldAutoExpandMarginForInitialLabels are on.
When we are talking about the series with name colSeries1
Then this series shapes will match the Temperature column of sample data named TemperatureAverageDataLongLabels within small tolerance
When we are talking about the axis with name xAxis
# The month names collide at the sample's width, so they rotate.
Then this axis's labels will be rotated to avoid collision
Then this axis will contain a labels for January, February, March, April, May, Jun, July, August, September, October, November, December
Then this axis's initial label should be rendered within the chart bounds
