# SankeySeries with a Highlighted link value overlaid on each budget flow (highlightedValuesDisplayMode Overlay).
# The base flows and layout are asserted below; the overlaid Highlighted amounts have no Then step yet (see report).
When we wait for chart animations to complete
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Income, Category, Detail
When we are talking about the series with name sankey
Then the rendered sankey node bands represent these values within 12 percent:
    | Label          | Value |
    | Income         | 4660  |
    | Housing        | 2137  |
    | Food           | 812   |
    | Transport      | 468   |
    | Savings        | 1243  |
    | Rent           | 1592  |
    | Utilities      | 545   |
    | Groceries      | 517   |
    | Dining Out     | 295   |
    | Car            | 468   |
    | Retirement     | 831   |
    | Emergency Fund | 412   |
Then the rendered sankey ribbons are valid and carry these flows within 12 percent:
    | Ribbon              | Value |
    | income->housing     | 2137  |
    | income->food        | 812   |
    | income->transport   | 468   |
    | income->savings     | 1243  |
    | housing->rent       | 1592  |
    | housing->utilities  | 545   |
    | food->groceries     | 517   |
    | food->dining        | 295   |
    | transport->car      | 468   |
    | savings->retirement | 831   |
    | savings->emergency  | 412   |
Then the rendered sankey node Income is left of node Housing
Then the rendered sankey node Housing is left of node Rent
Then the rendered sankey node Housing is in the same layer as node Savings
Then the rendered sankey node Rent is in the same layer as node Emergency Fund
