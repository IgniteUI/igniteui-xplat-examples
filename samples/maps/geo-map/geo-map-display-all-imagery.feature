# NO ASSERTION YET - needs a new step (see sidecar report). This file has no Then on purpose: the generator
# rejects it until a step is approved or the sample JSON opts out of sampleTesting.
# Demonstrates: switching background imagery from a PropertyEditorPanel (ImagerySource: OpenStreetMaps and nine
# ESRI maps). Initial state: backgroundContent OpenStreetMapImagery, editor value OpenStreetMaps.
# Requested steps:
#   Then this map will have background imagery of type OpenStreetMapImagery
#   When the property editor sets ImagerySource to WorldTopographicMap
#   Then this map will have background imagery of type ArcGISOnlineMapImagery with map server uri
#     https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer
