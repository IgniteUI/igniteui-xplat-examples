# NO ASSERTION YET - needs a new step (see sidecar report). This file has no Then on purpose: the generator
# rejects it until a step is approved or the sample JSON opts out of sampleTesting.
# Demonstrates: AzureMapsImagery (style Satellite) as background content plus a GeographicTileSeries
# (imagerySeries) whose TileImagery is a second AzureMapsImagery overlay; the editor switches the overlay's
# ImageryStyle. The API key is a placeholder (REPLACE_WITH_AZURE_KEY), so no tiles can load; only the imagery
# configuration is assertable.
# Requested steps:
#   Then this map will have background imagery of type AzureMapsImagery with imagery style Satellite
#   Then the tile series named imagerySeries will have tile imagery of type AzureMapsImagery with imagery style
#     Satellite
