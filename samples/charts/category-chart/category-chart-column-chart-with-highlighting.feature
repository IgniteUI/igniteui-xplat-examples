# Column chart of TemperatureRangeData (HighNY, HighLA by Month) with series highlighting enabled and highlighting mode
# and behavior Auto: a series with highlighting enabled resolves Auto to BrightenSpecific, so hovering the HighNY Jul
# column brightens that column only (palette #8BDC5C); HighLA (#8961A9) keeps its fill.
Then this category chart will have 2 visible series of Column type
Then this category chart will have xAxis labels matching the Month column of sample data named TemperatureRangeData
When we are talking about the series at index 0
Then this series shapes will match the HighNY column of sample data named TemperatureRangeData within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the HighLA column of sample data named TemperatureRangeData within small tolerance
When we are talking about the series at index 0
When the user hovers slightly below the category point with label Jul
Then this series will have main shapes with label Jul bright filled #8BDC5C and bright outline #8BDC5C
Then this series will have labeled shapes with fill #8BDC5C and outline #8BDC5C at the following labels: Jan,Feb,Mar,Apr,May,Jun,Aug,Sep,Oct,Nov,Dec
When we are talking about the series at index 1
Then this series will have main shapes with fill #8961A9
# Unchecking "Highlight Series" in the editor stops the hover from brightening the Jul column.
When we click the 'Highlight Series' row in the property editor panel
When we are talking about the series at index 0
When the user hovers slightly below the category point with label Jul
Then this series will have labeled shapes with fill #8BDC5C and outline #8BDC5C at the following labels: Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
