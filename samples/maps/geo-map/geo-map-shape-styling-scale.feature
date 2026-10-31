# ShapeScaleStyling (MapShapeScaleStyling): a GeographicShapeSeries over world_countries_all.shp added in code,
# filled from a logarithmic color scale over Population 5000..2,000,000,000 (DodgerBlue..brown), stroked from
# ShapeStrokeColors [Black] with ShapeThickness 0.5. The series is unnamed, so select it by index.
# Per-country scale fills cannot be targeted by an existing step (see report).
# The series is added once the shapefile has been imported.
When we wait for the chart to have 1 series
When we are talking about the series at index 0
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 0.5
