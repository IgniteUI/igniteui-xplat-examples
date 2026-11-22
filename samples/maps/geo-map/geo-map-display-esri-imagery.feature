# Docs: igniteui-documentation/docs/xplat/src/content/en/components/geo-map-display-esri-imagery.mdx
# The three live maps must keep their distinct imagery services rather than sharing one default server.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
Then the map named streetMap will have background imagery of type ArcGISOnlineMapImagery
Then the map named streetMap will use background map server https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer
Then the map named oceansMap will have background imagery of type ArcGISOnlineMapImagery
Then the map named oceansMap will use background map server https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer
Then the map named topographicMap will have background imagery of type ArcGISOnlineMapImagery
Then the map named topographicMap will use background map server https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer
And the map named streetMap will have dry-run imagery requests:
    | RequestType     | UriContains      |
    | ArcGISMapServer | World_Street_Map |
    | Tile            | World_Street_Map |
And the map named oceansMap will have dry-run imagery requests:
    | RequestType     | UriContains      |
    | ArcGISMapServer | World_Ocean_Base |
    | Tile            | World_Ocean_Base |
And the map named topographicMap will have dry-run imagery requests:
    | RequestType     | UriContains    |
    | ArcGISMapServer | World_Topo_Map |
    | Tile            | World_Topo_Map |
