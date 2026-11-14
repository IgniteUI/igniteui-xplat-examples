# NO ASSERTION YET - needs a new step (see sidecar report). This file has no Then on purpose: the generator
# rejects it until a step is approved or the sample JSON opts out of sampleTesting.
# Demonstrates: GeographicScatterAreaSeries areaSeries over WorldTemperatures (Lon/Lat/Value, isotherms at 0, 10,
# 20, 30 C) colored through a CustomPaletteColorScale (blue/green/orange/red at 0.5 alpha) over 0..30.
# The only pixel step ("this series will contain single pixel colors at these locations") is Assert.Inconclusive
# (bug 244815) and scales positions through x/y axes, which a map lacks.
# Requested step: Then this series will have pixel color <color> at geographic location <lon> longitude and
#   <lat> latitude (e.g. 0 C isotherm point 178.0, -63.0 -> rgba(32,146,252,0.5))
