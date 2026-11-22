# ShapeScaleStyling (MapShapeScaleStyling): a GeographicShapeSeries over world_countries_all.shp added in code,
# filled from a logarithmic color scale over Population 5000..2,000,000,000 (DodgerBlue..brown), stroked from
# ShapeStrokeColors [Black] with ShapeThickness 0.5. The series is unnamed, so select it by index.
# The series is added once the shapefile has been imported.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
Then this chart will have 1 series
When we are talking about the series at index 0
Then this series will have some visible shapes
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 0.5
Then this series will use at least 2 distinct main shape fills from this palette:
| Fill |
| DodgerBlue |
| yellow |
| #c2f542 |
| #e8c902 |
| #e8b602 |
| #e87902 |
| brown |
| Gray |
