# SankeySeries built from the SankeyIncomeFlow edge list alone (no node list): the series derives the nodes (label = id)
# and their layers, Salary and Bonus feed Budget, which splits into Housing, Savings and Discretionary and then 8 details.
# Node values are throughput, the larger of in-flow and out-flow; auto callouts label every node.
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
# Derived layers: Salary/Bonus, then Budget, then the three buckets, then the details.
Then the rendered sankey node Salary is in the same layer as node Bonus
Then the rendered sankey node Salary is left of node Budget
Then the rendered sankey node Budget is left of node Housing
Then the rendered sankey node Housing is in the same layer as node Discretionary
Then the rendered sankey node Housing is left of node Rent
Then the rendered sankey node Rent is in the same layer as node Entertainment
# nodeGap 250 separates the stacked bands, and the ribbons at Budget stack without crossing.
Then the rendered sankey nodes in each layer are separated by a gap
Then the rendered sankey ribbons meeting node Budget are ordered by the nodes at their other ends
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
Then the sankey node callouts are placed beside their nodes
