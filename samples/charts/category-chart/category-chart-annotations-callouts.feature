# Auto callouts: every data point is called out with its Temperature value.
When we are talking about the CalloutLayer layer
Then this callout layer will have annotations with the following properties:
  | X | Y | Label |
  | 0 | 27 | 27 |
  | 1 | 25 | 25 |
  | 2 | 21 | 21 |
  | 3 | 19 | 19 |
  | 4 | 16 | 16 |
  | 5 | 13 | 13 |
  | 6 | 14 | 14 |
  | 7 | 15 | 15 |
  | 8 | 19 | 19 |
  | 9 | 22 | 22 |
  | 10 | 26 | 26 |
  | 11 | 30 | 30 |
Then this category chart will have yAxis title with 'Degrees Celsius' text
Then this category chart will have xAxis labels matching the Month column of sample data named TemperatureAnnotatedData
When we are talking about the series at index 0
Then this series shapes will match the Temperature column of sample data named TemperatureAnnotatedData within small tolerance
