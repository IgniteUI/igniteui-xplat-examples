# Composite chart: clustered Revenue/Expenses columns on a 0..30M axis plus an Income/Revenue % spline area on a
# second 0..160 axis, with formatted value callouts over each column and auto (precision 1) callouts on the spline.
When we are talking about the series with name series1
Then this series shapes will match category values within small tolerance:
  | Value |
  | 16914000 |
  | 15077000 |
  | 16886000 |
  | 17652000 |
  | 21082000 |
  | 17737000 |
  | 18687000 |
  | 21470000 |
  | 28072000 |
When we are talking about the series with name series2
Then this series shapes will match category values within small tolerance:
  | Value |
  | 10183000 |
  | 12813000 |
  | 14476000 |
  | 11705000 |
  | 14044000 |
  | 12803000 |
  | 13677000 |
  | 13717000 |
  | 17133000 |
When we are talking about the series with name series3
Then this series shapes will match category values within small tolerance:
  | Value |
  | 39.7954 |
  | 15.0162 |
  | 14.2722 |
  | 33.6902 |
  | 33.3839 |
  | 27.8176 |
  | 26.8101 |
  | 36.1109 |
  | 38.9677 |
Then this series will have markers with type Circle
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values:
  | Label |
  | Jan 1, 2019 |
  | Mar 1, 2019 |
  | Jun 1, 2019 |
  | Sep 1, 2019 |
  | Jan 1, 2020 |
  | Mar 1, 2020 |
  | Jun 1, 2020 |
  | Sep 1, 2020 |
  | Jan 1, 2021 |
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of 0 and a maximum value of 30000000
Then this axis title will display text 'In Millions of U.S. Dollars'
When we are talking about the axis with name yAxis2
Then this axis range will have a minimum value of 0 and a maximum value of 160
Then this axis title will display text 'Percentage'
Then this legend will have items with text: Revenue,Expenses,Income / Revenue %
When we are talking about annotation layer revenueCallouts targeting series series1
Then this callout layer will have annotations with the following properties:
  | X | Y | Label |
  | 0 | 16914000 | $16.9M |
  | 1 | 15077000 | $15.1M |
  | 2 | 16886000 | $16.9M |
  | 3 | 17652000 | $17.7M |
  | 4 | 21082000 | $21.1M |
  | 5 | 17737000 | $17.7M |
  | 6 | 18687000 | $18.7M |
  | 7 | 21470000 | $21.5M |
  | 8 | 28072000 | $28.1M |
When we are talking about annotation layer expensesCallouts targeting series series2
Then this callout layer will have annotations with the following properties:
  | X | Y | Label |
  | 0.5 | 10183000 | $10.2M |
  | 1.5 | 12813000 | $12.8M |
  | 2.5 | 14476000 | $14.5M |
  | 3.5 | 11705000 | $11.7M |
  | 4.5 | 14044000 | $14.0M |
  | 5.5 | 12803000 | $12.8M |
  | 6.5 | 13677000 | $13.7M |
  | 7.5 | 13717000 | $13.7M |
  | 8.5 | 17133000 | $17.1M |
When we are talking about annotation layer profitCallouts targeting series series3
# CALIBRATE: auto callout text at autoCalloutLabelPrecision 1
Then this callout layer will have annotations with the following properties:
  | X | Y | Label |
  | 0 | 39.7954 | 39.8 |
  | 1 | 15.0162 | 15.0 |
  | 2 | 14.2722 | 14.3 |
  | 3 | 33.6902 | 33.7 |
  | 4 | 33.3839 | 33.4 |
  | 5 | 27.8176 | 27.8 |
  | 6 | 26.8101 | 26.8 |
  | 7 | 36.1109 | 36.1 |
  | 8 | 38.9677 | 39.0 |
