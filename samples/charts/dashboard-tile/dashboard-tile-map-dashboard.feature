# Dashboard tile titled "World Cities" given WorldCities (rows with X longitude / Y latitude) infers a geographic map.
# Documentation: docs/xplat/src/content/en/components/dashboard-tile.mdx
Then the dashboard tile will have title 'World Cities'
And the dashboard tile will be displaying a GeographicMap
And the dashboard tile will report the Auto visualization
And the dashboard tile will report no renderer errors
# The default 400-marker limit can omit these cities from the 606-row data set.
# Raise it explicitly before checking city placement, rather than depending on marker selection.
When this dashboard tile broadly customizes GeographicProportionalSymbolSeries by setting MaximumMarkers to '10000'
Then the current map will render these cities from sample data named WorldCities:
    | City      |
    | Tokyo     |
    | New York  |
    | Sao Paulo |
