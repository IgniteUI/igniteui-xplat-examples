# Documentation: components/geo-map-display-azure-imagery.mdx.
# The sample ships a placeholder key; assert the provider configuration and
# independent overlay style changes without claiming remote tiles have loaded.
Then the map named map will have background imagery of type AzureMapsImagery
And the map named map will have background imagery style Satellite
And the tile series named imagerySeries will have imagery style Satellite
When we choose 'Road' from the 'Imagery Style' row in the property editor panel
Then the tile series named imagerySeries will have imagery style Road
And the map named map will have background imagery style Satellite
