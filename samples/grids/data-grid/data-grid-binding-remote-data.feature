# Virtual (OData) data source over the public Northwind Orders entity set. NorthwindOrders is left out of the testing build
# so tests do not depend on the live service; orders of the same shape stand in for it, in OrderID order.
Given we have sample data named ordersTestData with these values:
  | OrderID | ShipName                  | Freight | ShipAddress            | ShipCity       | ShipCountry |
  | 10248   | Vins et alcools Chevalier | 32.38   | 59 rue de l'Abbaye     | Reims          | France      |
  | 10249   | Toms Spezialitäten        | 11.61   | Luisenstr. 48          | Münster        | Germany     |
  | 10250   | Hanari Carnes             | 65.83   | Rua do Paço, 67        | Rio de Janeiro | Brazil      |
And the sample's data named NorthwindOrders is replaced by data named ordersTestData
Then this grid will have data cells with these values in the visible rows:
  | ID    | Name                      |
  | 10248 | Vins et alcools Chevalier |
  | 10249 | Toms Spezialitäten        |
  | 10250 | Hanari Carnes             |
# Star columns at their minimum widths can overflow the sample's width, so the trailing visible columns depend on the host's viewport.
Then this grid will have the header cells with the following text: ID, Order Date, Name, Freight, Ship Date, Shipping Address
