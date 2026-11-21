# Built-in pager with pageSize 20: the first page starts at product 1001, the next page at 1021.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: ID, Product, Country, Price, Orders, Order Value, Order Date
Then this grid will have data cells with these values in the visible rows:
  | ID   |
  | 1001 |
  | 1002 |
  | 1003 |
When I click the pagers next button
Then this grid will have data cells with these values in the visible rows:
  | ID   |
  | 1021 |
  | 1022 |
  | 1023 |
