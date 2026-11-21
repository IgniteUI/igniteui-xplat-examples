# Two GeographicSymbolSeries of circle markers: WorldCities (606 cities) white with a Gray outline and
# WorldCapitals (164 capitals) white with an rgb(32,146,252) outline.
When we are talking about the series with name CitiesSeries
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline Gray
# 606 cities exceed the default MaximumMarkers, so 400 markers are rendered.
Then this series will have 400 markers
When we are talking about the series with name CapitalsSeries
Then this series will have 164 markers
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline rgb(32,146,252)
