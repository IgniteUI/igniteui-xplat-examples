# Column options menu: sorting ID descending from the menu puts the last ProductOrders record (1100) first and marks DESC selected.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: ID, Product, Country, Price, Orders, Order Value, Order Date
When we are talking about the column named ID
Then all of the cells in this column appear to be aligned to the center horizontally
Then this grid will have data cells with these values in the visible rows:
  | ID   |
  | 1001 |
  | 1002 |
  | 1003 |
When we open the column options dialog on the Right side of the  column with key ID
And we click the column options sort DESC button
Then the column options sort DESC button will appear selected
And this grid will have data cells with these values in the visible rows:
  | ID   |
  | 1100 |
  | 1099 |
  | 1098 |
