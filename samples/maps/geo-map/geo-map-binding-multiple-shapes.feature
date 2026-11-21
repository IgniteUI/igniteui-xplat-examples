# Three shapefiles overlaid (MapMultipleShapesLoad + MapMultipleShapesReaders): WorldCountries polygons into
# polygonSeries, WorldCableRoutes polylines into lineSeries, WorldCities points into symbolSeries.
# Styling comes from the sample JSON.
# Each series is filled once its own shapefile has been imported.
When we are talking about the series with name polygonSeries
Then this series will have some visible shapes
Then this series will have main shapes with fill rgb(150,150,150)
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 1
When we are talking about the series with name lineSeries
Then this series will have some visible shapes
Then this series will have main shapes with outline rgba(147,15,180,0.5)
Then this series will have main shapes with thickness 3
When we are talking about the series with name symbolSeries
Then this series will have some visible shapes
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline rgb(2,102,196)
