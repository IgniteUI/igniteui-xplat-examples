# Capital cities read at runtime from WorldCities.json (only items with cap=true) and plotted by a
# GeographicSymbolSeries that MapBindingDataJsonPointsOnViewInit adds in code: circle markers, white fill,
# purple outline Color.FromArgb(255, 135, 5, 255). The series is added without a name, so select it by index.
# The capital count comes from a network file, so no marker count is asserted.
# The series is added once WorldCities.json has been fetched.
When we wait for the chart to have 1 series
When we are talking about the series at index 0
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline rgb(135,5,255)
