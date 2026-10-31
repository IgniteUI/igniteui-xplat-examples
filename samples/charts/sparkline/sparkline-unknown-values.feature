# Area sparkline over SparklineUnknownData (Label 4,5,2,7,-1,3,-2,5,2,6; Value 4,5,null,7,-1,3,-2,null,2,6)
# with unknownValuePlotting LinearInterpolate: the area bridges the null items (indices 2 and 7) instead
# of breaking into separate segments, and closes back along 0 because the data crosses zero.
Then this sparkline will display lines with the following properties:
  | PointType  | X | Y  |
  | StartPoint | 0 | 4  |
  | WayPoint   | 1 | 5  |
  | WayPoint   | 3 | 7  |
  | WayPoint   | 4 | -1 |
  | WayPoint   | 5 | 3  |
  | WayPoint   | 6 | -2 |
  | WayPoint   | 8 | 2  |
  | WayPoint   | 9 | 6  |
  | WayPoint   | 9 | 0  |
  | WayPoint   | 0 | 0  |
When this sparklines horizontal axis visibility is Visible
And this sparklines vertical axis visibility is Visible
Then this sparkline will have a horizontal axis with first and last labels with values 4,6
Then this sparkline will have a vertical axis with a top value of 7 and a bottom value of -2
