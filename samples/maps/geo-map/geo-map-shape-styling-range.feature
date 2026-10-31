# ShapeRangeStyling (MapShapeRangeStyling): a GeographicShapeSeries over world_countries_all.shp added in code,
# filled by Population band (5K-10M yellow, 10M-100M orange, 100M-500M red, 500M-2B brown, else Gray). Every range
# uses the styler's DefaultStroke Black and DefaultThickness 0.5. The series is unnamed, so select it by index.
# Per-band fills cannot be targeted by an existing step (see report).
# The series is added once the shapefile has been imported.
When we wait for the chart to have 1 series
When we are talking about the series at index 0
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 0.5
