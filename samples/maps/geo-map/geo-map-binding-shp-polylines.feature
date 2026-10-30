# WorldCableRoutes.shp bound declaratively through a ShapeDataSource to a GeographicPolylineSeries:
# semi-transparent gray routes, stroke thickness 3, shape filter resolution 0.
When we are talking about the series with name GeographicPolylineSeries1
When we wait for this series to be drawn
# CALIBRATE: the JSON stroke "rgb(82, 82, 82, 0.4)" is a 4-component rgb(); confirm the product reads the 0.4 alpha.
Then this series will have main shapes with outline rgba(82,82,82,0.4)
Then this series will have main shapes with thickness 3
