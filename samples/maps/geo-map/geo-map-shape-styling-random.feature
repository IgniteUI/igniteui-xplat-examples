# ShapeRandomStyling (MapShapeRandomStyling): a GeographicShapeSeries over world_countries_all.shp added in code,
# each country filled with a random pick from #8C23D1, #0E9759, #B4D336, #F2A464, #D74545, DodgerBlue and stroked
# from ShapeStrokeColors [Black] with ShapeThickness 0.5. The series is unnamed, so select it by index.
# Fills are random, so only the deterministic stroke and thickness are asserted.
# The series is added once the shapefile has been imported.
When we wait for the chart to have 1 series
When we are talking about the series at index 0
Then this series will have main shapes with outline Black
Then this series will have main shapes with thickness 0.5
