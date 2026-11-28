# WorldCableRoutes.shp bound declaratively through a ShapeDataSource to a GeographicPolylineSeries:
# semi-transparent gray routes, stroke thickness 3, shape filter resolution 0.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
When we are talking about the series with name GeographicPolylineSeries1
Then this series will have some visible shapes
# The JSON stroke "rgb(82, 82, 82, 0.4)" is a 4-component rgb(); the product reads its 0.4 alpha.
Then this series will have main shapes with outline rgba(82,82,82,0.4)
Then this series will have main shapes with thickness 3
