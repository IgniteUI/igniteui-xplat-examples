# Slice selection with selectionMode Brighten and selectionBehavior PerDataItemSingleSelect (highlighting
# None) over EnergyGlobalDemand: clicking a slice brightens it, and clicking another moves the selection
# rather than adding to it.
When we click on the 2nd visible slice
When we hover over the bottom right corner of the page
# CALIBRATE: fills assume the default item-wise palette (#8bdc5c, #8961A9, #6DB1FF, #82E9D9, #EA3C63).
Then the domain pie chart will have slices with the following properties:
  | Value | Fill               |
  | 37    | #ff8bdc5c          |
  | 25    | #ff8961A9[Brighten] |
  | 12    | #ff6DB1FF          |
  | 11    | #ff82E9D9          |
  | 15    | #ffEA3C63          |
When we click on the 4th visible slice
When we hover over the bottom right corner of the page
Then the domain pie chart will have slices with the following properties:
  | Value | Fill               |
  | 37    | #ff8bdc5c          |
  | 25    | #ff8961A9          |
  | 12    | #ff6DB1FF          |
  | 11    | #ff82E9D9[Brighten] |
  | 15    | #ffEA3C63          |
