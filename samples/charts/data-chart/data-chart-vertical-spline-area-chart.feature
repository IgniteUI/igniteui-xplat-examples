# VerticalSplineAreaSeries of WebsiteVisitsByHour: desktop and mobile visits per hour as half-opaque curved areas
# running down an inverted category y axis of hours, with visits on a numeric x axis starting at 0.
When we wait for chart animations to complete
Then this legend will have items with text: Desktop,Mobile
When we are talking about the axis with name yAxis
# The category y axis is inverted, so the hours read top to bottom in data order.
Then this axis will have labels visible with these values: 00:00, 01:00, 02:00, 03:00, 04:00, 05:00, 06:00, 07:00, 08:00, 09:00, 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00, 18:00, 19:00, 20:00, 21:00, 22:00, 23:00
When we are talking about the axis with name xAxis
Then this axis title will display text 'Visits'
# Only the minimum (0) is fixed; the maximum and interval are automatic, so the value labels are not asserted.
# Shapes are read in axis order, so the inverted category axis lists the data back to front. Splines are read back
# within large tolerance.
When we are talking about the series with name VerticalSplineAreaSeries1
Then this series shapes will match the Desktop column of sample data named WebsiteVisitsByHour within large tolerance in reverse order
Then the VerticalSplineAreaSeries1 should have a fill opacity set to 0.5
Then this series will have main shapes with thickness 2
When we are talking about the series with name VerticalSplineAreaSeries2
Then this series shapes will match the Mobile column of sample data named WebsiteVisitsByHour within large tolerance in reverse order
Then the VerticalSplineAreaSeries2 should have a fill opacity set to 0.5
Then this series will have main shapes with thickness 2
