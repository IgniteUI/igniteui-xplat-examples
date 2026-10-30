# Custom callouts: one callout per row of TemperatureAnnotatedData at (Index, Temperature) labelled with TempInfo.
When we are talking about the CalloutLayer layer
Then this callout layer will have annotations with the following properties:
  | X | Y | Label |
  | 0 | 27 | 27°C |
  | 1 | 25 | 25°C |
  | 2 | 21 | 21°C |
  | 3 | 19 | 19°C |
  | 4 | 16 | 16°C |
  | 5 | 13 | 13°C |
  | 6 | 14 | 14°C |
  | 7 | 15 | 15°C |
  | 8 | 19 | 19°C |
  | 9 | 22 | 22°C |
  | 10 | 26 | 26°C |
  | 11 | 30 | 30°C |
Then this category chart will have xAxis labels matching the Month column of sample data named TemperatureAnnotatedData
When we are talking about the series at index 0
Then this series shapes will match the Temperature column of sample data named TemperatureAnnotatedData within small tolerance
