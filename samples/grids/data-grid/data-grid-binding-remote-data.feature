# Virtual (OData) data source over the public Northwind Orders entity set; rows arrive in OrderID order.
# CALIBRATE: NorthwindOrders is excluded from the "testing" flavor and the data comes from the live Northwind service; confirm the sample is emitted for the test host and the service's first orders.
Then this grid will have data cells with these values in the visible rows:
  | ID    | Name                      |
  | 10248 | Vins et alcools Chevalier |
  | 10249 | Toms Spezialitäten        |
  | 10250 | Hanari Carnes             |
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: ID, Order Date, Name, Freight, Ship Date, Shipping Address
