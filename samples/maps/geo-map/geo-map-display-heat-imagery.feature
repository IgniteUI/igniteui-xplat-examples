# NO ASSERTION YET - needs a new step (see sidecar report). This file has no Then on purpose: the generator
# rejects it until a step is approved or the sample JSON opts out of sampleTesting.
# Demonstrates: heat-map imagery. MapDisplayHeatImageryOnViewInit zooms to (-134.5, 16, 70, 37), loads
# AmericanCities.shp and adds a GeographicTileSeries whose TileImagery is a TileGeneratorMapImagery driven by a
# HeatTileGenerator (log scale, blur 6..20, five scale colors from translucent blue to red) over POP_2010.
# Requested steps:
#   Then the series at index 0 will have tile imagery of type TileGeneratorMapImagery
#   Then the series at index 0 will have some visible tile pixels within the geographic region -134.5, 16, 70, 37
