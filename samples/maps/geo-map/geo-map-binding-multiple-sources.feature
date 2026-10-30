# Three series over three in-code data sources: WorldFlights routes (lineSeries), 30-degree meridians/parallels
# (gridSeries, from WorldGridlines) and WorldAirports locations (symbolSeries). The flights and airports are
# picked at random by WorldConnections.Init, so counts are not asserted; styling comes from the sample JSON.
When we are talking about the series with name lineSeries
# CALIBRATE: alpha 0.05 is 12.75/255; the product and the test brush parser may round it differently (12 vs 13).
Then this series will have main shapes with outline rgba(196,14,14,0.05)
Then this series will have main shapes with thickness 4
When we are talking about the series with name gridSeries
Then this series will have main shapes with outline Gray
Then this series will have main shapes with thickness 1
When we are talking about the series with name symbolSeries
Then this series will have markers with type Circle
Then this series will have markers with fill #aad3df and outline rgb(73,73,73)
