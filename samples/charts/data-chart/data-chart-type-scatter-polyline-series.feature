# ScatterPolylineSeries: the airplane outline as a Black 1px polyline plus seat outlines stroked per class/status by AirplaneSeatStrokeStyling.
# AirplaneSeatStrokeStyling has only a Blazor implementation, so seat stroke colours are not asserted (see report).
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: 600, 400, 200, 0, -200, -400, -600
When we are talking about the series with name airplaneShapeSeries
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 1
