# Local ProductOrders array grouped by Status (display name "Status"); groups sort ascending so "Delivered" leads.
Then the visible rows will be in this order: GroupHeader, Item, Item
# Group headers read "<displayName>: <value>", here "Status".
Then the visible rows at the following positions will have this text:
  | Position | Text              |
  | 1        | Status: Delivered |
# The headers are the columns that fit the sample surface: star columns at their minimum widths overflow it, so the
# trailing columns depend on the surface width.
Then this grid will have the header cells with the following text: ID, Product, Country, Price, Orders, Order Value, Order Date
