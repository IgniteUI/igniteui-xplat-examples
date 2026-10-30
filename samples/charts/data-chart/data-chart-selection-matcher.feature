# Selection by SeriesMatcher: on view init Europe/Hydro and USA/Wind are selected and painted with the orange selectionBrush.
Then this legend will have items with text: Hydro,Wind,Solar,Other
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: China, Europe, USA, Brazil, Canada
When we are talking about the axis with name xAxis
Then this axis title will display text 'TWh'
# Fragment shapes are read back as the stacked (cumulative) end of each fragment, in fragment order.
# CALIBRATE: the category Y axis is inverted; the tables list values in data order (China first) - confirm the analyzer reads them in that order.
When we are talking about the series with name s1
Then this series shapes will match category values within small tolerance:
  | Value |
  | 63.46 |
  | 43.08 |
  | 35.64 |
  | 77.25 |
  | 88.57 |
When we are talking about the series with name s2
Then this series shapes will match category values within small tolerance:
  | Value |
  | 83.71 |
  | 74.51 |
  | 75.51 |
  | 88.05 |
  | 96.5  |
When we are talking about the series with name s3
Then this series shapes will match category values within small tolerance:
  | Value |
  | 94.86 |
  | 84.99 |
  | 89.7  |
  | 89.12 |
  | 97.49 |
When we are talking about the series with name s4
Then this series shapes will match category values within small tolerance:
  | Value |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
When we wait for chart animations to complete
# CALIBRATE: the selection is added by SelectionMatcherOnViewInit after a 100 ms timer; confirm it has run by this point.
Then the selected series items collection will have the following items:
  | ValueMemberPath |
  | Hydro           |
  | Wind            |
When we are talking about the series with name s1
Then this series will have main shapes with label Europe filled orange
When we are talking about the series with name s2
Then this series will have main shapes with label USA filled orange
