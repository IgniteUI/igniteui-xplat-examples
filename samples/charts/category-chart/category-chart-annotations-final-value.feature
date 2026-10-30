# Final value annotation: the y axis shows the last Temperature value (Dec) with precision 0.
When we are talking about the axis with name yAxis
Then the axis will have 1 annotation label
Then the final value layer will have the annotation labels with the following properties:
  | Position | Text |
  | 30 | 30 |
Then this category chart will have xAxis labels matching the Month column of sample data named TemperatureAnnotatedData
When we are talking about the series at index 0
Then this series shapes will match the Temperature column of sample data named TemperatureAnnotatedData within small tolerance
