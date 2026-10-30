# ScatterContourSeries: ScatterMagneticFieldData contours from a 10-value LinearContourValueResolver, drawn 3px thick and coloured by a ValueBrushScale.
# The series is drawn from a triangulation computed after it first renders, so wait for it to finish.
Given the series named series listens to the triangulation status changed event
When we wait for the series named series to finish triangulating
When we are talking about the axis with name xAxis1
Then this axis title will display text 'Longitude'
Then this axis will have labels visible with these values: -180, -150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180
When we are talking about the axis with name yAxis1
Then this axis title will display text 'Latitude'
Then this axis will have labels visible with these values: 90, 60, 30, 0, -30, -60, -90
When we are talking about the series with name series
Then this series will have contours with 10 lines
Then this series will have contours with 3 thickness
