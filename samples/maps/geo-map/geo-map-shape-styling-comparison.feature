# ShapeComparisonStyling (MapShapeComparisonStyling): a GeographicShapeSeries over world_countries_all.shp added in
# code, styled per country by Region (e.g. Eastern Europe Red, Southern Asia Orange, Western Africa Yellow,
# Northern America DodgerBlue, South America #22c928, Melanesia #b64fff, default Gray). Every mapping uses the
# styler's DefaultStroke Black and DefaultThickness 0.5. The series is unnamed, so select it by index.
# The series is added once world_countries_all.shp has been imported.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
Then this chart will have 1 series
When we are talking about the series at index 0
Then this series will have some visible shapes
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 0.5
Then this series will use at least 2 distinct main shape fills from this palette:
| Fill |
| Red |
| Orange |
| Yellow |
| DodgerBlue |
| #22c928 |
| #b64fff |
| Gray |
