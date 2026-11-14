# WorldCountries.shp bound declaratively through a ShapeDataSource to a GeographicShapeSeries:
# translucent gray fill rgba(146,146,146,0.3), black outline, thickness 1.
When we are talking about the series with name GeographicShapeSeries1
When we wait for this series to be drawn
Then this series will have main shapes with fill rgba(146,146,146,0.3)
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 1
