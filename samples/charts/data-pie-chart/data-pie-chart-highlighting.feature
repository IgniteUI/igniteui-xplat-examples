# Mouse highlighting with highlightingMode BrightenSpecific and highlightingBehavior DirectlyOver over
# EnergyGlobalDemand: hovering a slice brightens only that slice, the others keep their fill and are not
# faded.
When we hover over the 2nd visible slice
# CALIBRATE: fills assume the default item-wise palette (#8bdc5c, #8961A9, #6DB1FF, #82E9D9, #EA3C63)
# and that BrightenSpecific lightens by the same amount the [Brighten] qualifier expects.
Then the domain pie chart will have slices with the following properties:
  | Value | Fill               | Opacity |
  | 37    | #ff8bdc5c          | 1       |
  | 25    | #ff8961A9[Brighten] | 1       |
  | 12    | #ff6DB1FF          | 1       |
  | 11    | #ff82E9D9          | 1       |
  | 15    | #ffEA3C63          | 1       |
When we hover over the 4th visible slice
Then the domain pie chart will have slices with the following properties:
  | Value | Fill               | Opacity |
  | 37    | #ff8bdc5c          | 1       |
  | 25    | #ff8961A9          | 1       |
  | 12    | #ff6DB1FF          | 1       |
  | 11    | #ff82E9D9[Brighten] | 1       |
  | 15    | #ffEA3C63          | 1       |
