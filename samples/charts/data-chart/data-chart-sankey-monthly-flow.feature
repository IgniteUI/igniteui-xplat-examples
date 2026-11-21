# SankeySeries budget flow by month: SankeyBudgetNodes pins Income, 4 categories and 7 details to 3 layers, and the
# SankeyBudgetMonths links carry one value column per month. It opens on July; the Month editor switches the series'
# link value path, and the flows animate to that month's values.
When we wait for chart animations to complete
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
# Choosing August reads the August column: Food, Transport and Dining Out grow while Savings shrinks.
When we choose 'August' from the 'Month' row in the property editor panel
When we wait for chart animations to complete
When we are talking about the series with name sankey
Then the rendered sankey node bands represent these values within 12 percent:
    | Label          | Value |
    | Income         | 4728  |
    | Housing        | 2151  |
    | Food           | 1036  |
    | Transport      | 735   |
    | Savings        | 806   |
    | Rent           | 1592  |
    | Utilities      | 559   |
    | Groceries      | 548   |
    | Dining Out     | 488   |
    | Car            | 735   |
    | Retirement     | 612   |
    | Emergency Fund | 194   |
Then the rendered sankey ribbons are valid and carry these flows within 12 percent:
    | Ribbon              | Value |
    | income->housing     | 2151  |
    | income->food        | 1036  |
    | income->transport   | 735   |
    | income->savings     | 806   |
    | housing->rent       | 1592  |
    | housing->utilities  | 559   |
    | food->groceries     | 548   |
    | food->dining        | 488   |
    | transport->car      | 735   |
    | savings->retirement | 612   |
    | savings->emergency  | 194   |
When we are talking about annotation layer nodeLabels targeting series sankey
Then this callout layer will have annotations with the following properties:
    | Label          |
    | Income         |
    | Housing        |
    | Food           |
    | Transport      |
    | Savings        |
    | Rent           |
    | Utilities      |
    | Groceries      |
    | Dining Out     |
    | Car            |
    | Retirement     |
    | Emergency Fund |
