# Documentation: components/geo-map-display-azure-imagery.mdx.
# The sidecar supplies offline tiles while preserving independent overlay style changes.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
Then the map named map will have background imagery of type AzureMapsImagery
And the map named map will have background imagery style Satellite
And the tile series named imagerySeries will have imagery style Satellite
And the map named map will have dry-run imagery requests:
    | RequestType | UriContains         |
    | Tile        | atlas.microsoft.com |
When we choose 'Road' from the 'Imagery Style' row in the property editor panel
Then the tile series named imagerySeries will have imagery style Road
And the map named map will have background imagery style Satellite
