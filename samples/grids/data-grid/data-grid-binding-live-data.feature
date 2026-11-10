# Live-data portfolio grid (ticker onViewInit is skipped under testing): ID column hidden, custom Close/Change headers, row hover disabled, multi-row selection.
# The Grouping editor starts on, grouping by Category, Type and Contract. PortfolioData is random, so the group layout changes
# from run to run; known data in one group keeps the rows a group header followed by items.
Given we have sample data named liveTestData with these values:
  | ID | Category | Type | Contract | Risk | Open  | Price | Change | ChangePercent |
  | 0  | Oil      | Oil  | Swap     | High | 45.54 | 45.30 | -0.24  | -0.52         |
  | 1  | Oil      | Oil  | Swap     | Low  | 45.54 | 46.03 | 0.49   | 1.08          |
  | 2  | Oil      | Oil  | Swap     | High | 45.54 | 45.72 | 0.18   | 0.40          |
  | 3  | Oil      | Oil  | Swap     | Low  | 45.54 | 45.10 | -0.44  | -0.97         |
  | 4  | Oil      | Oil  | Swap     | High | 45.54 | 45.90 | 0.36   | 0.79          |
And the sample's data named PortfolioData is replaced by data named liveTestData
Then the visible rows will be in this order: GroupHeader, Item, Item, Item, Item
Then this grid will have the header cells with the following text: Category, Type, Risk, Open, Close, Change ($), Change (%)
When the user hovers over the following cell in column Category in the relative visible row 1
Then the grid will not have a highlighted row
When the user selects the following cells in the relative visible rows using modifier keys:
  | RelativeRowNumber | ColumnKey | ModifierKey |
  | 1                 | Category  |             |
  | 3                 | Category  | Cntl        |
Then the grid will have the following selected rows:
  | RelativeRowNumber |
  | 1                 |
  | 3                 |
