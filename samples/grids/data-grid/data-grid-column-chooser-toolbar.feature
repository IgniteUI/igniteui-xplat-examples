# DataGridToolbar "Global Sales" with its column chooser; ID, Product and Price start hidden (isHidden) so the grid opens on Country.
Then the column chooser will indicate 3 are columns hidden
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Country, Orders, Order Value, Order Date, Margin, Profit, Status
When we are talking about the column named Margin
Then all of the cells in this column appear to be aligned to the center horizontally
When we are talking about the column named Order Date
Then all of the cells in this column appear to be aligned to the right horizontally
