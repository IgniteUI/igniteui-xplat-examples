# 8000 SalesPersonsData rows grouped by Territory with row hover disabled (ticker onViewInit is skipped under testing).
Then the visible rows will be in this order: GroupHeader, Item, Item
# Group headers read "<column>: <value>"; the first Territory group in ascending order is Australia.
Then the visible rows at the following positions will have this text:
  | Position | Text                 |
  | 1        | Territory: Australia |
When the user hovers over the following cell in column First Name in the relative visible row 1
Then the grid will not have a highlighted row
Then this grid will have the header cells with the following text: First Name, Last Name, Territory, YTD Sales, Avg. Sale, Change, Change (%)
