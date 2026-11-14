# VerticalStepAreaSeries of MonthlyRainfallByCity: Seattle and Madrid monthly rainfall as half-opaque stepped areas
# running down an inverted category y axis of months, with rainfall on a numeric x axis starting at 0.
When we wait for chart animations to complete
Then this legend will have items with text: Seattle,Madrid
When we are talking about the axis with name yAxis
# The category y axis is inverted, so the months read top to bottom in data order.
Then this axis will have labels visible with these values: January, February, March, April, May, June, July, August, September, October, November, December
When we are talking about the axis with name xAxis
Then this axis title will display text 'Rainfall (mm)'
# Only the minimum (0) is fixed; the maximum and interval are automatic, so the value labels are not asserted.
# Shapes are read in axis order, so the inverted category axis lists the data back to front.
When we are talking about the series with name VerticalStepAreaSeries1
Then this series shapes will match the Seattle column of sample data named MonthlyRainfallByCity within small tolerance in reverse order
Then the VerticalStepAreaSeries1 should have a fill opacity set to 0.5
Then this series will have main shapes with thickness 2
When we are talking about the series with name VerticalStepAreaSeries2
Then this series shapes will match the Madrid column of sample data named MonthlyRainfallByCity within small tolerance in reverse order
Then the VerticalStepAreaSeries2 should have a fill opacity set to 0.5
Then this series will have main shapes with thickness 2
