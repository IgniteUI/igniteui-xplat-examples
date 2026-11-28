# Docs: igniteui-documentation/docs/xplat/src/content/en/components/geo-map-display-bing-imagery.mdx
# Compare aerial imagery with road imagery. These assertions read the live imagery instances;
# Metadata and tiles come from the sidecar's synchronous offline handler.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
Then the map named aerialMap will have background imagery of type BingMapsMapImagery
Then the map named aerialMap will have background imagery style AerialWithLabels
Then the map named roadMap will have background imagery of type BingMapsMapImagery
Then the map named roadMap will have background imagery style Road
And the map named aerialMap will have dry-run imagery requests:
    | RequestType  | UriContains     |
    | BingMetadata | AerialWithLabels |
    | Tile         | tiles.invalid   |
And the map named roadMap will have dry-run imagery requests:
    | RequestType  | UriContains   |
    | BingMetadata | Road          |
    | Tile         | tiles.invalid |
When we remove background imagery from the map named roadMap
Then the map named roadMap will have background imagery of type None
And the map named aerialMap will have background imagery style AerialWithLabels
When we restore background imagery on the map named roadMap
Then the map named roadMap will have background imagery of type BingMapsMapImagery
And the map named roadMap will have background imagery style Road
