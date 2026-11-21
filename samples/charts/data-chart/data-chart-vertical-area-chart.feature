# VerticalAreaSeries of PopulationByAgeGroup: 1990 and 2025 population (millions) per age group as half-opaque
# areas running down a category y axis, with the value on a numeric x axis starting at 0.
When we wait for chart animations to complete
Then this legend will have items with text: 1990,2025
When we are talking about the axis with name yAxis
# The category y axis is not inverted, so the first age group sits at the bottom; a vertical axis lists its labels
# top to bottom.
Then this axis will have labels visible with these values: 80+, 70-79, 60-69, 50-59, 40-49, 30-39, 20-29, 10-19, 0-9
When we are talking about the axis with name xAxis
Then this axis title will display text 'Population (millions)'
# Only the minimum (0) is fixed; the maximum and interval are automatic, so the value labels are not asserted.
When we are talking about the series with name VerticalAreaSeries1
Then this series shapes will match the Year1990 column of sample data named PopulationByAgeGroup within small tolerance
Then the VerticalAreaSeries1 should have a fill opacity set to 0.5
Then this series will have main shapes with thickness 2
When we are talking about the series with name VerticalAreaSeries2
Then this series shapes will match the Year2025 column of sample data named PopulationByAgeGroup within small tolerance
Then the VerticalAreaSeries2 should have a fill opacity set to 0.5
Then this series will have main shapes with thickness 2
