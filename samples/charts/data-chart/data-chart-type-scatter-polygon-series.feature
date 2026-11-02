# ScatterPolygonSeries: the airplane outline (LightGray fill, Black 0.5px outline) plus seat polygons filled per class/status by AirplaneSeatFillStyling.
# Per-seat fills are mixed, and no step asserts fill counts per colour (see report).
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: 600, 400, 200, 0, -200, -400, -600
When we are talking about the series with name airplaneShapeSeries
Then this series will have main shapes with fill LightGray
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 0.5
