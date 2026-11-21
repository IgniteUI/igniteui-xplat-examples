# Docs: igniteui-documentation/docs/xplat/src/content/en/components/geo-map-display-bing-imagery.mdx
# Compare aerial imagery with road imagery. These assertions read the live imagery instances;
# tile availability depends on the supplied Bing key and is not a substitute for checking the selected styles.
Then the map named aerialMap will have background imagery of type BingMapsMapImagery
Then the map named aerialMap will have background imagery style AerialWithLabels
Then the map named roadMap will have background imagery of type BingMapsMapImagery
Then the map named roadMap will have background imagery style Road
When we remove background imagery from the map named roadMap
Then the map named roadMap will have background imagery of type None
And the map named aerialMap will have background imagery style AerialWithLabels
When we restore background imagery on the map named roadMap
Then the map named roadMap will have background imagery of type BingMapsMapImagery
And the map named roadMap will have background imagery style Road
