# Combined vertical chart of RegionalSalesTargets: Actual sales as a BarSeries and Target as a VerticalLineSeries with
# diamond markers, sharing an inverted category y axis of regions and a numeric x axis starting at 0.
When we wait for chart animations to complete
Then this legend will have items with text: Actual,Target
When we are talking about the axis with name yAxis
# The category y axis is inverted, so the regions read top to bottom in data order.
Then this axis will have labels visible with these values: North America, Europe, Asia Pacific, Latin America, Middle East, Africa
When we are talking about the axis with name xAxis
Then this axis title will display text 'Sales (millions of dollars)'
# Only the minimum (0) is fixed; the maximum and interval are automatic, so the value labels are not asserted.
# Shapes are read in axis order, so the inverted category axis lists the data back to front.
When we are talking about the series with name BarSeries1
Then this series shapes will match the Actual column of sample data named RegionalSalesTargets within small tolerance in reverse order
When we are talking about the series with name VerticalLineSeries2
Then this series shapes will match the Target column of sample data named RegionalSalesTargets within small tolerance in reverse order
Then this series will have markers with type Diamond
Then this series will have main shapes with thickness 2
