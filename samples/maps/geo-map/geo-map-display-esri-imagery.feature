# NO ASSERTION YET - needs a new step (see sidecar report). This file has no Then on purpose: the generator
# rejects it until a step is approved or the sample JSON opts out of sampleTesting.
# Demonstrates: three maps, each with ArcGISOnlineMapImagery from a different Esri map server:
#   streetMap (leftContent)       .../ArcGIS/rest/services/World_Street_Map/MapServer
#   oceansMap (content)           .../arcgis/rest/services/Ocean/World_Ocean_Base/MapServer
#   topographicMap (rightContent) .../ArcGIS/rest/services/World_Topo_Map/MapServer
# Requested step: Then the map named <name> will have background imagery of type ArcGISOnlineMapImagery with map
#   server uri <uri>
