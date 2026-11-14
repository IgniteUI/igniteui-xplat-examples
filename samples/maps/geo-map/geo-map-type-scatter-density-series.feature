# NO ASSERTION YET - needs a new step (see sidecar report). This file has no Then on purpose: the generator
# rejects it until a step is approved or the sample JSON opts out of sampleTesting.
# Demonstrates: Australian places parsed from AusPlaces.csv (network) into a GeographicHighDensityScatterSeries
# (heat Black..Red over 0..5, point extent 1), map zoomed to Australia (110, -10, 45, -35). The existing
# pixel-color steps scale through series x/y axes, which a map lacks.
# Requested step: Then this series will have heat pixels between Black and Red at geographic location
#   <lon> longitude and <lat> latitude
