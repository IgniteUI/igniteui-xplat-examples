# ShapeRandomStyling (MapShapeRandomStyling): a GeographicShapeSeries over world_countries_all.shp added in code,
# each country filled with a random pick from #8C23D1, #0E9759, #B4D336, #F2A464, #D74545, DodgerBlue and stroked
# from ShapeStrokeColors [Black] with ShapeThickness 0.5. The series is unnamed, so select it by index.
# The series is added once the shapefile has been imported.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
Then this chart will have 1 series
When we are talking about the series at index 0
Then this series will have some visible shapes
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 0.5
Then this series will use at least 1 distinct main shape fills from this palette:
| Fill |
| #8C23D1 |
| #0E9759 |
| #B4D336 |
| #F2A464 |
| #D74545 |
| DodgerBlue |
