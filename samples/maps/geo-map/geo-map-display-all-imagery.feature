# Documentation: components/geo-map-resources-esri.mdx — selecting imagery providers.
Then the map named map will have background imagery of type OpenStreetMapImagery
When we choose 'WorldStreetMap (ESRI)' from the 'Imagery Source' row in the property editor panel
Then the map named map will have background imagery of type ArcGISOnlineMapImagery
And the map named map will use background map server https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer
When we choose 'WorldTopographicMap (ESRI)' from the 'Imagery Source' row in the property editor panel
Then the map named map will use background map server https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer
When we choose 'OpenStreetMaps' from the 'Imagery Source' row in the property editor panel
Then the map named map will have background imagery of type OpenStreetMapImagery
