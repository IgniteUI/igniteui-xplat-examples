# SalesData (1042 rows) grouped by Month with no initialSummaries, so each column is the row count per month (the
# summary operand defaults to Count); groups are ordered by month name. The highlight filter (Country ne 'UK') is
# hidden by highlightedValuesDisplayMode Hidden, so the full counts are drawn with no overlay layer. Counts computed
# from the data: April 59, August 60, December 155, February 59, January 54, July 54, June 129, March 55, May 56,
# November 90, October 174, September 97.
Then this category chart will have 1 visible series of Column type
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: April, August, December, February, January, July, June, March, May, November, October, September
When we are talking about the series at index 0
Then this series shapes will match category values within small tolerance:
  | Value |
  | 59    |
  | 60    |
  | 155   |
  | 59    |
  | 54    |
  | 54    |
  | 129   |
  | 55    |
  | 56    |
  | 90    |
  | 174   |
  | 97    |
# Switching the editor's highlight display mode to Overlay draws the filtered counts over the full ones: the rows
# that are not UK, per month (computed from the data).
When we choose 'Overlay' from the 'Highlight Display Mode: ' row in the property editor panel
Then this category chart will have ordered columns with the following highlight values:
  | Label     | Value |
  | April     | 47    |
  | August    | 49    |
  | December  | 126   |
  | February  | 46    |
  | January   | 42    |
  | July      | 44    |
  | June      | 103   |
  | March     | 45    |
  | May       | 44    |
  | November  | 70    |
  | October   | 138   |
  | September | 76    |
