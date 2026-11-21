# VerticalSplineSeries of AtmosphereTemperatureByAltitude: standard and tropical air temperature by altitude as
# curved lines with circle markers, altitude rising up a (non-inverted) category y axis.
When we wait for chart animations to complete
Then this legend will have items with text: Standard Atmosphere,Tropical
When we are talking about the axis with name yAxis
# The category y axis is not inverted, so 0 km sits at the bottom; a vertical axis lists its labels top to bottom.
Then this axis will have labels visible with these values: 12 km, 11 km, 10 km, 9 km, 8 km, 7 km, 6 km, 5 km, 4 km, 3 km, 2 km, 1 km, 0 km
When we are talking about the axis with name xAxis
Then this axis title will display text 'Temperature (°C)'
# The value axis range is fully automatic, so its labels are not asserted.
# Splines are read back within large tolerance.
When we are talking about the series with name VerticalSplineSeries1
Then this series shapes will match the Standard column of sample data named AtmosphereTemperatureByAltitude within large tolerance
Then this series will have markers with type Circle
Then this series will have main shapes with thickness 2
When we are talking about the series with name VerticalSplineSeries2
Then this series shapes will match the Tropical column of sample data named AtmosphereTemperatureByAltitude within large tolerance
Then this series will have markers with type Circle
Then this series will have main shapes with thickness 2
