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
When we are talking about the series with name airplaneSeatSeries
# Seat 2A, a first class seat still for sale, centred at about (-49.9, 239.0).
When user hovers over the series location -49.9 x and 239 y
Then this series will have default tooltips with these visuals:
  | TitleText       | TooltipText                                              |
  | Airplane Seats: | Class: First\nSeat: 2A\nPrice: $850\nStatus: Available |
