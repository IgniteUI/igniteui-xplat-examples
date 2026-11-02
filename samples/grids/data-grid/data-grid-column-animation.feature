# Column animations: hiding a column through the column options menu removes it and the remaining columns shift left.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Name, Address, City, Salary, Birthday, Country
When we open the column options dialog on the Right side of the  column with key Address
And we hide the column thru the column options dialog
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Name, City, Salary, Birthday, Country, Sales
