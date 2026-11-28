# VerticalLineSeries of OceanTemperatureByDepth: summer and winter temperature by depth, with depth running down an
# inverted category y axis and circle markers on each reading.
When we wait for chart animations to complete
Then this legend will have items with text: Summer,Winter
When we are talking about the axis with name yAxis
# The category y axis is inverted, so depth increases top to bottom in data order.
Then this axis will have labels visible with these values: 0 m, 10 m, 20 m, 30 m, 50 m, 75 m, 100 m, 150 m, 200 m, 300 m
When we are talking about the axis with name xAxis
Then this axis title will display text 'Temperature (°C)'
# The value axis range is fully automatic, so its labels are not asserted.
# Shapes are read in axis order, so the inverted category axis lists the data back to front.
When we are talking about the series with name VerticalLineSeries1
Then this series shapes will match the Summer column of sample data named OceanTemperatureByDepth within small tolerance in reverse order
Then this series will have markers with type Circle
Then this series will have main shapes with thickness 2
When we are talking about the series with name VerticalLineSeries2
Then this series shapes will match the Winter column of sample data named OceanTemperatureByDepth within small tolerance in reverse order
Then this series will have markers with type Circle
Then this series will have main shapes with thickness 2
