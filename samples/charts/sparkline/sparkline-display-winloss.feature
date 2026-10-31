# Win/loss sparkline over SparklineMixedData (Label A..H, Value 30,-10,40,-20,30,40,-10,30).
# Every win is a full-height bar from 0 to the data maximum (40), every loss a full-height bar from the
# data minimum (-20) to 0, regardless of magnitude; losses (B, D, G) use the negative brush.
Then this sparkline will display rectangles within the following ranges:
  | IndexStart | IndexEnd | Bottom | Top |
  | 0          | 1        | 0      | 40  |
  | 1          | 2        | -20    | 0   |
  | 2          | 3        | 0      | 40  |
  | 3          | 4        | -20    | 0   |
  | 4          | 5        | 0      | 40  |
  | 5          | 6        | 0      | 40  |
  | 6          | 7        | -20    | 0   |
  | 7          | 8        | 0      | 40  |
Then this sparkline will display negative rectangles within the following ranges:
  | IndexStart | IndexEnd | Bottom | Top |
  | 1          | 2        | -20    | 0   |
  | 3          | 4        | -20    | 0   |
  | 6          | 7        | -20    | 0   |
Then this sparkline will have positive shapes colored #FF8bdc5c
Then this sparkline will have negative shapes colored #ffee5879
Then this sparkline will not display any markers
