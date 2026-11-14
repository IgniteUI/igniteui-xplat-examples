# GeographicContourLineSeries over WorldTemperatures (isotherm points at 0, 10, 20 and 30 C): contour lines of
# thickness 4, colored through a ValueBrushScale (blue/green/orange/red at 50% alpha) over 0..30.
# The series is drawn from a triangulation computed after it first renders; the sample's hasQueuedWork waits for it.
When we are talking about the series with name contourSeries
Then this series will have contours with 4 thickness
# The default LinearContourValueResolver produces 10 contour lines across the data range.
Then this series will have contours with 10 lines
