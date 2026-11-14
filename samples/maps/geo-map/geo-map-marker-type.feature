# Two GeographicSymbolSeries with markerType Automatic: WorldCities (606 cities) outlined Gray and WorldCapitals
# (164 capitals) outlined rgb(32,146,252), both white-filled. Automatic resolves through the map's
# MarkerAutomaticBehavior, which the sample leaves at the SeriesViewer default, Circle: every series gets a
# circle. Only Indexed and SmartIndexed pick a shape per series index.
When we are talking about the series with name CitiesSeries
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline Gray
When we are talking about the series with name CapitalsSeries
Then this series will have 164 markers
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline rgb(32,146,252)
