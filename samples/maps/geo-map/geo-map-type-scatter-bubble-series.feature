# GeographicProportionalSymbolSeries (bubble map) over WorldCities: circle markers sized by Population through a
# SizeScale 4..60 and filled by Population through a ValueBrushScale (green/orange/red, 0..30), outline
# rgba(0,0,0,0.3). Per-bubble fills are interpolated by the scale, so only the marker type is asserted per marker.
When we are talking about the series with name WorldCitiesSeries
Then this series will have markers with type Circle
# CALIBRATE: 606 cities exceed the default MaximumMarkers (400); confirm the rendered marker count.
Then this series will have 400 markers
