# ScatterPolylineSeries: the airplane outline as a Black 1px polyline plus seat outlines stroked per class/status by AirplaneSeatStrokeStyling.
# AirplaneSeatStrokeStyling has only a Blazor implementation, so seat stroke colours are not asserted (see report).
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: 600, 400, 200, 0, -200, -400, -600
When we are talking about the series with name airplaneShapeSeries
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 1
When we are talking about the series with name airplaneSeatSeries
# Seat 2A, a first class seat still for sale. A polyline is hit along its line rather than inside it, so the
# pointer goes on the rightmost point of the seat's outline, (-40.292, 234.3496).
When user hovers over the series location -40.292 x and 234.3496 y
Then this series will have default tooltips with these visuals:
  | TitleText       | TooltipText                                              |
  | Airplane Seats: | Class: First\nSeat: 2A\nPrice: $850\nStatus: Available |
