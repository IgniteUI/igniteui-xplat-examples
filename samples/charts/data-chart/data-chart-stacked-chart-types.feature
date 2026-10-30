# Stacked chart types: the editor swaps the stacked series type; initial state is a StackedColumnSeries of Coal/Hydro/Nuclear/Gas/Oil per country.
# Switching type runs a code handler (EditorChangeStackedSeriesType) that no step drives, so only the initial type is asserted.
Then this legend will have items with text: Coal,Hydro,Nuclear,Gas,Oil
When we are talking about the axis with name catXAxis
Then this axis will have labels visible with these values: Canada, China, Russia, Australia, United States, France
# Fragment shapes are read back as the stacked (cumulative) top of each fragment, in fragment order.
When we are talking about the series with name coal
Then this series shapes will match category values within small tolerance:
  | Value |
  | 400   |
  | 925   |
  | 550   |
  | 450   |
  | 800   |
  | 375   |
When we are talking about the series with name hydro
Then this series shapes will match category values within small tolerance:
  | Value |
  | 750   |
  | 1550  |
  | 975   |
  | 800   |
  | 1550  |
  | 700   |
When we are talking about the series with name nuclear
Then this series shapes will match category values within small tolerance:
  | Value |
  | 975   |
  | 1950  |
  | 1450  |
  | 975   |
  | 2125  |
  | 975   |
When we are talking about the series with name gas
Then this series shapes will match category values within small tolerance:
  | Value |
  | 1150  |
  | 2300  |
  | 1700  |
  | 1125  |
  | 2600  |
  | 1325  |
When we are talking about the series with name oil
Then this series shapes will match category values within small tolerance:
  | Value |
  | 1250  |
  | 2500  |
  | 1900  |
  | 1225  |
  | 2850  |
  | 1475  |
