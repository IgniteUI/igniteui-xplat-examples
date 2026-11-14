# Column chart of TemperatureAnnotatedData in FadeOthersSpecific highlighting mode with NearestItemsAndSeries behavior.
# With no includedProperties both numeric columns are series: Index (#8BDC5C) and Temperature (#8961A9). Hovering Jun
# fades every other month of Index to the series' highlighting fade opacity and leaves Jun fully opaque.
Then this category chart will have 2 visible series of Column type
When the user hovers over category point with label Jun
When we are talking about the series at index 0
Then this series will have unfaded labeled shapes at the following labels: Jun
Then this series will have faded labeled shapes at the following labels: Jan,Feb,Mar,Apr,May,Jul,Aug,Sep,Oct,Nov,Dec
Then this series will have labeled shapes with fill #8BDC5C and outline #8BDC5C at the following labels: Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
