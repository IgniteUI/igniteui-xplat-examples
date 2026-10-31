# GeographicShapeSeries over world_countries_all.shp (ShapeFileOnViewInit) with IsCustomShapeStyleAllowed and the
# ShapeFileStyling AssigningShapeStyle handler: fill by Continent (Africa #ECB912, Asia #E11D1D, Europe #2894EC,
# Americas #0CC308, Australia #B42AE9, other gray) and stroke black for every country.
# Per-continent fills cannot be targeted by an existing step (see report); the handler's stroke applies to all shapes.
When we are talking about the series with name GeographicShapeSeries1
# Its shapes arrive once the shapefile has been imported.
When we wait for this series to be drawn
Then this series will have main shapes with outline black
