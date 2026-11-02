# Seven ValueOverlays (thickness 5) drawn across the 0-10 y axis at fixed values over a column series of LocalData.
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 1, 2, 3, 4, 5, 6, 7, 8, 9
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of 0 and a maximum value of 10
Then the axis will have a value overlay named overlay1 at 2
Then the axis will have a value overlay named overlay2 at 3.6
Then the axis will have a value overlay named overlay3 at 5.8
Then the axis will have a value overlay named overlay4 at 1
Then the axis will have a value overlay named overlay5 at 8
Then the axis will have a value overlay named overlay6 at 7
Then the axis will have a value overlay named overlay7 at 5
When we are talking about the series with name series1
Then this series shapes will match category values within small tolerance:
  | Value |
  | 1     |
  | 2     |
  | 6     |
  | 8     |
  | 2     |
  | 6     |
  | 4     |
  | 2     |
  | 1     |
When we are talking about the series with name overlay1
Then the value overlay will display a line with thickness 5
When we are talking about the series with name overlay2
Then the value overlay will display a line with thickness 5
When we are talking about the series with name overlay3
Then the value overlay will display a line with thickness 5
When we are talking about the series with name overlay4
Then the value overlay will display a line with thickness 5
When we are talking about the series with name overlay5
Then the value overlay will display a line with thickness 5
When we are talking about the series with name overlay6
Then the value overlay will display a line with thickness 5
When we are talking about the series with name overlay7
Then the value overlay will display a line with thickness 5
