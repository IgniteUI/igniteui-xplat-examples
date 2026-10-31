# Overview: "Sales Team" toolbar, grouped by Country and Income with Combined group headers and root summaries.
# CALIBRATE: assumes the summaryScope Root summary row is not exported as the first visible row.
Then the visible rows will be in this order: GroupHeader, Item
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Photo, Name, Sales, Salary, Age, Date of Birth
When we are talking about the column named Age
Then all of the cells in this column appear to be aligned to the center horizontally
