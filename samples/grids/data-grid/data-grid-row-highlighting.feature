# Row hover highlighting enabled: hovering a cell highlights its row.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Name, Street, City, Salary, Photo, Date of Birth
When the user hovers over the following cell in column Name in the relative visible row 1
Then the row at releative index 1 will appear higlighted
And the row at releative index 0 will not appear higlighted
