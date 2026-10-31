# Column chart of TemperatureAnnotatedData in BrightenSpecific highlighting mode. With no includedProperties both numeric
# columns are series: Index (#8BDC5C) and Temperature (#8961A9). Hovering Jun brightens only the hovered Jun column of
# Index; its other months, and Temperature, keep their palette fills.
Then this category chart will have 2 visible series of Column type
When the user hovers over category point with label Jun
When we are talking about the series at index 0
Then this series will have main shapes with label Jun bright filled #8BDC5C and bright outline #8BDC5C
Then this series will have labeled shapes with fill #8BDC5C and outline #8BDC5C at the following labels: Jan,Feb,Mar,Apr,May,Jul,Aug,Sep,Oct,Nov,Dec
When we are talking about the series at index 1
Then this series will have labeled shapes with fill #8961A9 and outline #8961A9 at the following labels: Jun
# The pointer leaves the chart for the editor, whose highlighting mode is set to None; hovering Jun again no longer
# brightens its column.
When we simulate a mouse leave on the chart at category Jun
When we choose 'None' from the 'Highlighting Mode: ' row in the property editor panel
When the user hovers over category point with label Jun
When we are talking about the series at index 0
Then this series will have labeled shapes with fill #8BDC5C and outline #8BDC5C at the following labels: Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
