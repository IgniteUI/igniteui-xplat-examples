# Group-by area visible with no initial groups; grouping Country ascending inserts group headers with Canada first.
Then the visible rows will be in this order: Item, Item, Item
When the grid groups the column Country in ascending order
Then the visible rows will be in this order: GroupHeader, Item, Item
# Group headers read "<column>: <value>".
Then the visible rows at the following positions will have this text:
  | Position | Text            |
  | 1        | Country: Canada |
