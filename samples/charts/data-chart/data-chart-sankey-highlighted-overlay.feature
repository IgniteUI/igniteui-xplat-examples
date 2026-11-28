# SankeySeries over the SankeyIncomeFlow edge list with the Highlighted column overlaid on each flow
# (highlightedValuesDisplayMode Overlay). The base flows, derived layers and callouts are asserted below; the overlaid
# Highlighted amounts are not: no step reads a Sankey's highlight-layer shapes, which sit apart from the series' own.
When we wait for chart animations to complete
When we are talking about the series with name sankey
Then the rendered sankey node bands represent these values within 12 percent:
    | Label         | Value |
    | Salary        | 7642  |
    | Bonus         | 1873  |
    | Budget        | 9515  |
    | Housing       | 2914  |
    | Savings       | 4226  |
    | Discretionary | 2375  |
    | Rent          | 2437  |
    | Utilities     | 477   |
    | ETFs          | 2519  |
    | Emergency     | 1106  |
    | Retirement    | 601   |
    | Dining        | 1047  |
    | Travel        | 869   |
    | Entertainment | 459   |
Then the rendered sankey ribbons are valid and carry these flows within 12 percent:
    | Ribbon                       | Value |
    | Salary->Budget               | 7642  |
    | Bonus->Budget                | 1873  |
    | Budget->Housing              | 2914  |
    | Budget->Savings              | 4226  |
    | Budget->Discretionary        | 2375  |
    | Housing->Rent                | 2437  |
    | Housing->Utilities           | 477   |
    | Savings->ETFs                | 2519  |
    | Savings->Emergency           | 1106  |
    | Savings->Retirement          | 601   |
    | Discretionary->Dining        | 1047  |
    | Discretionary->Travel        | 869   |
    | Discretionary->Entertainment | 459   |
Then the rendered sankey node Salary is in the same layer as node Bonus
Then the rendered sankey node Salary is left of node Budget
Then the rendered sankey node Budget is left of node Savings
Then the rendered sankey node Savings is left of node ETFs
Then the rendered sankey node ETFs is in the same layer as node Utilities
When we are talking about annotation layer nodeLabels targeting series sankey
Then this callout layer will have annotations with the following properties:
    | Label         |
    | Salary        |
    | Bonus         |
    | Budget        |
    | Housing       |
    | Savings       |
    | Discretionary |
    | Rent          |
    | Utilities     |
    | ETFs          |
    | Emergency     |
    | Retirement    |
    | Dining        |
    | Travel        |
    | Entertainment |
