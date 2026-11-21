# VerticalStepLineSeries of PolicyRatesByQuarter: Federal Reserve and ECB policy rates per quarter as 3px stepped lines
# down an inverted category y axis, with the rate on a '{0}%' formatted numeric x axis starting at 0.
When we wait for chart animations to complete
Then this legend will have items with text: Federal Reserve,European Central Bank
When we are talking about the axis with name yAxis
# The category y axis is inverted, so the quarters read top to bottom in data order.
Then this axis will have labels visible with these values: Q1 2022, Q2 2022, Q3 2022, Q4 2022, Q1 2023, Q2 2023, Q3 2023, Q4 2023, Q1 2024, Q2 2024, Q3 2024, Q4 2024, Q1 2025, Q2 2025
When we are talking about the axis with name xAxis
Then this axis title will display text 'Policy rate'
# Only the minimum (0) is fixed, so just its label is asserted, showing the '{0}%' label format; the maximum and
# interval are automatic.
Then this axis will contain a labels for 0%
# Shapes are read in axis order, so the inverted category axis lists the data back to front.
When we are talking about the series with name VerticalStepLineSeries1
Then this series shapes will match the Federal column of sample data named PolicyRatesByQuarter within small tolerance in reverse order
Then this series will have main shapes with thickness 3
When we are talking about the series with name VerticalStepLineSeries2
Then this series shapes will match the European column of sample data named PolicyRatesByQuarter within small tolerance in reverse order
Then this series will have main shapes with thickness 3
