# Initial sort description Property Descending puts "Villa" rows first; tri-state header click on Property removes the sort and restores data order.
Then this grid will have data cells with these values in the visible rows:
  | Property |
  | Villa    |
  | Villa    |
  | Villa    |
When we are talking about the column named ID
Then all of the cells in this column appear to be aligned to the center horizontally
When we click on the header for the column with key Property
Then this grid will have data cells with these values in the visible rows:
  | ID   |
  | 1001 |
  | 1002 |
  | 1003 |
# The headers are the columns that fit the sample surface: star columns at their minimum widths overflow it, so the
# trailing columns depend on the surface width.
Then this grid will have the header cells with the following text: ID, Property, Country, City, Price, Rooms
