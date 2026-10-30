# GeographicContourLineSeries over WorldTemperatures (isotherm points at 0, 10, 20 and 30 C): contour lines of
# thickness 4, colored through a ValueBrushScale (blue/green/orange/red at 50% alpha) over 0..30.
# The series is drawn from a triangulation computed after it first renders, so wait for it to finish.
Given the series named contourSeries listens to the triangulation status changed event
When we wait for the series named contourSeries to finish triangulating
When we are talking about the series with name contourSeries
Then this series will have contours with 4 thickness
# CALIBRATE: the default LinearContourValueResolver is expected to produce 10 contour lines across the data range.
Then this series will have contours with 10 lines
