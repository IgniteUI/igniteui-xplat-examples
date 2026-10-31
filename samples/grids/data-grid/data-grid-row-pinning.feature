# Row pinning: the onViewInit handler pins EmployeesSalesData items 2 and 4 to the top of the grid.
Then the grid will have pinned rows with the following values:
  | DataIndex |
  | 2         |
  | 4         |
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Photo, First Name, Last Name, City, Country, Sales
