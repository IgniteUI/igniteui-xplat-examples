# Selection by SeriesMatcher: on view init Europe/Hydro and USA/Wind are selected and painted with the orange selectionBrush.
Then this legend will have items with text: Hydro,Wind,Solar,Other
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: China, Europe, USA, Brazil, Canada
When we are talking about the axis with name xAxis
Then this axis title will display text 'TWh'
# Fragment shapes are read back as the stacked (cumulative) end of each fragment, in fragment order.
# The category Y axis is inverted and shapes are read in axis order, so the tables list the data back to front (Canada first).
When we are talking about the series with name s1
Then this series shapes will match category values within small tolerance:
  | Value |
  | 88.57 |
  | 77.25 |
  | 35.64 |
  | 43.08 |
  | 63.46 |
When we are talking about the series with name s2
Then this series shapes will match category values within small tolerance:
  | Value |
  | 96.5  |
  | 88.05 |
  | 75.51 |
  | 74.51 |
  | 83.71 |
When we are talking about the series with name s3
Then this series shapes will match category values within small tolerance:
  | Value |
  | 97.49 |
  | 89.12 |
  | 89.7  |
  | 84.99 |
  | 94.86 |
When we are talking about the series with name s4
Then this series shapes will match category values within small tolerance:
  | Value |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
  | 100   |
# SelectionMatcherOnViewInit adds the two selections when the view is ready.
# The fragments take the palette in order, so Hydro (s1) is outlined #8bdc5c and Wind (s2) #8961A9; selection fills them orange.
Then the selected series items collection will have the following items:
  | SeriesMemberPath | SeriesMemberPathType | DataItem                                                                 |
  | Hydro            | ValueMemberPath      | Location=Europe;Year=2019;Hydro=632.54;Solar=154;Wind=461.3;Other=220.3 |
  | Wind             | ValueMemberPath      | Location=USA;Year=2019;Hydro=271.16;Solar=108;Wind=303.4;Other=78.34    |
When we are talking about the series with name s1
Then this series will have labeled shapes with fill orange and outline #8bdc5c at the following labels: Europe
When we are talking about the series with name s2
Then this series will have labeled shapes with fill orange and outline #8961A9 at the following labels: USA
