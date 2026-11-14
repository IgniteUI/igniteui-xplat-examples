# ShapeComparisonStyling (MapShapeComparisonStyling): a GeographicShapeSeries over world_countries_all.shp added in
# code, styled per country by Region (e.g. Eastern Europe Red, Southern Asia Orange, Western Africa Yellow,
# Northern America DodgerBlue, South America #22c928, Melanesia #b64fff, default Gray). Every mapping uses the
# styler's DefaultStroke Black and DefaultThickness 0.5. The series is unnamed, so select it by index.
# Per-region fills cannot be targeted by an existing step (see report).
# The series is added once world_countries_all.shp has been imported.
When we wait for the chart to have 1 series
When we are talking about the series at index 0
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 0.5
