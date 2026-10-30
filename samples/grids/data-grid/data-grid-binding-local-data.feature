# Local ProductOrders array grouped by Status (display name "Status"); groups sort ascending so "Delivered" leads.
Then the visible rows will be in this order: GroupHeader, Item, Item
# CALIBRATE: exact group-header text format for the default group header display with displayName "Status".
Then the visible rows at the following positions will have this text:
  | Position | Text              |
  | 1        | Status: Delivered |
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: ID, Product, Country, Price, Orders, Order Value, Order Date
