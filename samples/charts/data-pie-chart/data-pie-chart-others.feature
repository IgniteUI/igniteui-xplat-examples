# Others category with othersCategoryType Number and othersCategoryThreshold 15 over DataPieData
# (V1 100,40,20,15,10,5,4,3): the items below the threshold (Heating 10, Lighting 5, Electric 4, Misc 3)
# collapse into a single trailing Others slice of 22.
# An item exactly at the threshold (Utilities 15) stays out of Others.
Then the domain pie chart will have slices with the following properties:
  | Value | Label            |
  | 100   | Maintenance - 100 |
  | 40    | Cooling - 40     |
  | 20    | Residential - 20 |
  | 15    | Utilities - 15   |
  | 22    | Others - 22      |
