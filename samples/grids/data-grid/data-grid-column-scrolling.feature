# Twelve columns wider than the grid scroll horizontally; scrolling to the last column moves ID out of view.
Then this grid will have the header cells with the following text: ID, FirstName, LastName, Birthday, Age, CountryFlag
Then this grid will have data cells with these values in the visible rows:
  | ID   |
  | 1001 |
  | 1002 |
  | 1003 |
When we scroll the grid so that column 12 is visible
# CALIBRATE: the trailing visible set after scrolling depends on the real viewport width (all scrolled columns use defaultColumnMinWidth 120 or their declared minimums).
Then this grid will have the header cells with the following text: CountryFlag, Street, City, Country, Salary, Sales, Salary
