# Pager with pageSize 10 (rowHeight 50): each page shows exactly ten employee rows.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Photo, Name, Sales, Salary, Address, Country
# CALIBRATE: assumes the GTK viewport is tall enough for ten 50px rows plus the header and pager.
Then this grid will have 10 content rows
When I click the pagers next button
Then this grid will have 10 content rows
