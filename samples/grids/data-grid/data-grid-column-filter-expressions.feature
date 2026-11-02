# Filter expressions applied to the grid's FilterExpressions collection: a Name filter that matches no employee empties the grid.
Then this grid will have the header cells with the following text: Name, Age, Street, City, Country, Sales
Then the visible rows will be in this order: Item, Item, Item
When we filter data for values where Name contains zzz
Then the visible grid will have no cells
