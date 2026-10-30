# Column sparkline over SparklineMixedData (Label A..H, Value 30,-10,40,-20,30,40,-10,30).
# One column per item from 0 to its value; the negative items (B, D, G) are drawn as negative columns
# in the default negative brush.
Then this sparkline will display rectangles within the following ranges:
  | IndexStart | IndexEnd | Bottom | Top |
  | 0          | 1        | 0      | 30  |
  | 1          | 2        | -10    | 0   |
  | 2          | 3        | 0      | 40  |
  | 3          | 4        | -20    | 0   |
  | 4          | 5        | 0      | 30  |
  | 5          | 6        | 0      | 40  |
  | 6          | 7        | -10    | 0   |
  | 7          | 8        | 0      | 30  |
Then this sparkline will display negative rectangles within the following ranges:
  | IndexStart | IndexEnd | Bottom | Top |
  | 1          | 2        | -10    | 0   |
  | 3          | 4        | -20    | 0   |
  | 6          | 7        | -10    | 0   |
Then this sparkline will have positive shapes colored #FF8bdc5c
Then this sparkline will have negative shapes colored #ffee5879
When this sparklines horizontal axis visibility is Visible
And this sparklines vertical axis visibility is Visible
Then this sparkline will have a horizontal axis with first and last labels with values A,H
Then this sparkline will have a vertical axis with a top value of 40 and a bottom value of -20
