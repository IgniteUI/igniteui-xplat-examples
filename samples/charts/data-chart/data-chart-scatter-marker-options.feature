# ScatterSeries marker options: circle markers of size 10 (editor picks size/type); Europe vs Africa birth vs death rate.
# Rows whose DeathRate falls outside the configured 5-15 x range are not plotted and are left out of the tables.
Then this legend will have items with text: Europe,Africa
When we are talking about the axis with name xAxis
Then this axis title will display text 'Death Rate (per 1,000 people)'
Then this axis range will have a minimum value of 5 and a maximum value of 15
When we are talking about the axis with name yAxis
Then this axis title will display text 'Birth Rate (per 1,000 people)'
Then this axis will have labels visible with these values: 50, 40, 30, 20, 10, 0
When we are talking about the series with name scatterSeries1
Then this series shapes will match these scatter values:
  | X     | Y     |
  | 7.22  | 11.88 |
  | 9.6   | 9.8   |
  | 12.6  | 12.5  |
  | 9.8   | 10.8  |
  | 10.89 | 9.12  |
  | 8.97  | 9.39  |
  | 12.9  | 8.9   |
  | 6.84  | 10.98 |
  | 10.5  | 10.5  |
  | 9.2   | 10.2  |
  | 11.6  | 10.6  |
  | 7.7   | 12.4  |
  | 9.6   | 10.1  |
  | 8.9   | 12    |
  | 11.3  | 9     |
  | 11.2  | 8.5   |
  | 13.4  | 9.4   |
  | 6.6   | 12.5  |
  | 6.5   | 14.1  |
  | 10.7  | 8     |
  | 14.4  | 11.1  |
  | 6.7   | 8.7   |
  | 14.4  | 10.8  |
  | 7     | 10.7  |
  | 9.75  | 11.3  |
  | 8     | 10    |
  | 11.42 | 10.52 |
  | 7.6   | 8.1   |
  | 9.8   | 11.52 |
  | 8.7   | 10.1  |
  | 7.8   | 11.3  |
  | 10.4  | 9.7   |
  | 10.5  | 8.3   |
  | 13.2  | 10    |
  | 13    | 13.3  |
  | 7.1   | 8.2   |
  | 14.6  | 9.3   |
  | 9.9   | 10.3  |
  | 9.6   | 10    |
  | 9.1   | 9     |
  | 9.3   | 11.7  |
  | 8.2   | 10.5  |
  | 14.9  | 10.7  |
  | 9.2   | 11.9  |
Then this series will have markers with type Circle
Then this series markers will all have bounds width and height within 2 of 10
When we are talking about the series with name scatterSeries2
Then this series shapes will match these scatter values:
  | X     | Y     |
  | 8.68  | 42.32 |
  | 9.32  | 37.43 |
  | 7.02  | 24.14 |
  | 8.82  | 39.44 |
  | 11.03 | 42.66 |
  | 10.35 | 36.84 |
  | 5.61  | 21.14 |
  | 14.01 | 36.11 |
  | 13.22 | 43.86 |
  | 7.49  | 33.33 |
  | 7.56  | 35.23 |
  | 12.54 | 37.1  |
  | 10.19 | 42.81 |
  | 8.37  | 23.35 |
  | 5.96  | 27.2  |
  | 10.34 | 34.64 |
  | 7.07  | 32.83 |
  | 7     | 32.3  |
  | 7.82  | 30.09 |
  | 8.2   | 39.99 |
  | 8.31  | 31.56 |
  | 9.58  | 36.36 |
  | 10.78 | 37.15 |
  | 5.84  | 31.78 |
  | 12.92 | 28.16 |
  | 8.12  | 34.72 |
  | 5.2   | 20.19 |
  | 6.48  | 33.4  |
  | 7.5   | 37.05 |
  | 10.67 | 43.22 |
  | 7.96  | 34.57 |
  | 7.7   | 10.1  |
  | 5.15  | 20.4  |
  | 10.38 | 39.36 |
  | 7.46  | 29.59 |
  | 9.94  | 48.44 |
  | 12.77 | 39.37 |
  | 6.13  | 31.79 |
  | 6.81  | 34.33 |
  | 6.07  | 36.21 |
  | 7.5   | 17    |
  | 13.03 | 35.61 |
  | 11.63 | 43.66 |
  | 10.1  | 21.3  |
  | 11.24 | 36.32 |
  | 7.52  | 33.32 |
  | 9.86  | 29.27 |
  | 7.02  | 38.64 |
  | 8.83  | 34.53 |
  | 6.36  | 18.65 |
  | 8.87  | 42.63 |
  | 8     | 38.44 |
  | 8.4   | 33.94 |
Then this series will have markers with type Circle
Then this series markers will all have bounds width and height within 2 of 10
# The editor's marker combos resize and reshape both series' markers.
When we choose '20' from the 'Marker Size' row in the property editor panel
When we choose 'Triangle' from the 'Marker Type' row in the property editor panel
When we are talking about the series with name scatterSeries1
Then this series will have markers with type Triangle
Then this series markers will all have bounds width and height within 2 of 20
When we are talking about the series with name scatterSeries2
Then this series will have markers with type Triangle
Then this series markers will all have bounds width and height within 2 of 20
