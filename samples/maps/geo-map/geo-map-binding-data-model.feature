# Seven flights bound from in-code data models (MapBindingDataModelOnViewInit). For each flight the handler adds a
# GeographicPolylineSeries for the great-circle route (Outline = flight color, Thickness 9), named flight<n>Route,
# and then a GeographicSymbolSeries for its two cities (Circle markers, White fill, outline = flight color), named
# flight<n>Cities.
# Flights in order: Dallas-Singapore Green, Moscow-Auckland Red, Santiago-Tokyo Blue, Panama-Roma Orange,
# Atlanta-Johannesburg Black, New York-Doha Purple, Los Angeles-Sydney Gray.
# The map is zoomed to world window (0.2, 0.1, 0.6, 0.6) = roughly lon -108..108, lat -58..81; marker counts are
# asserted only for flights whose two cities both fall inside that window.
When we are talking about the series with name flight0Route
Then this series will have main shapes with outline Green
Then this series will have main shapes with thickness 9
When we are talking about the series with name flight0Cities
Then this series will have 2 markers
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline Green
When we are talking about the series with name flight1Route
Then this series will have main shapes with outline Red
Then this series will have main shapes with thickness 9
When we are talking about the series with name flight1Cities
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline Red
When we are talking about the series with name flight2Route
Then this series will have main shapes with outline Blue
Then this series will have main shapes with thickness 9
When we are talking about the series with name flight2Cities
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline Blue
When we are talking about the series with name flight3Route
Then this series will have main shapes with outline Orange
Then this series will have main shapes with thickness 9
When we are talking about the series with name flight3Cities
Then this series will have 2 markers
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline Orange
When we are talking about the series with name flight4Route
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 9
When we are talking about the series with name flight4Cities
Then this series will have 2 markers
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline Black
When we are talking about the series with name flight5Route
Then this series will have main shapes with outline Purple
Then this series will have main shapes with thickness 9
When we are talking about the series with name flight5Cities
Then this series will have 2 markers
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline Purple
# Los Angeles (lon -118) to Sydney (lon 151) crosses the Pacific: the route and both cities lie outside the
# window, so nothing of flight 6 is drawn.
When we are talking about the series with name flight6Route
Then this series will have no visible shapes
When we are talking about the series with name flight6Cities
Then this series will have 0 markers
