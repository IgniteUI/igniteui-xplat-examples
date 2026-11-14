# Line sparkline over SparklineMixedData (Label A..H, Value 30,-10,40,-20,30,40,-10,30).
# A single polyline through every value in data order, with no closing segment.
Then this sparkline will display lines with the following properties:
  | PointType  | X | Y   |
  | StartPoint | 0 | 30  |
  | WayPoint   | 1 | -10 |
  | WayPoint   | 2 | 40  |
  | WayPoint   | 3 | -20 |
  | WayPoint   | 4 | 30  |
  | WayPoint   | 5 | 40  |
  | WayPoint   | 6 | -10 |
  | WayPoint   | 7 | 30  |
Then this sparkline will not display any markers
When this sparklines horizontal axis visibility is Visible
And this sparklines vertical axis visibility is Visible
Then this sparkline will have a horizontal axis with first and last labels with values A,H
Then this sparkline will have a vertical axis with a top value of 40 and a bottom value of -20
