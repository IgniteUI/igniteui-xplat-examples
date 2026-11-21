# Styled SankeySeries over the SankeyIncomeFlow edge list: FlowStyleMappings color Savings, Housing and Discretionary by
# label and any node valued 9000-10000 (only Budget, 9515) by value, node bands get 4px rounded corners, and the ribbons
# use the UniformWidth shape. highlightScope ConnectedFlow is the default scope and has no Then step, so it is not asserted.
When we wait for chart animations to complete
When we are talking about the series with name sankey
Then the rendered sankey node Savings is filled #2E7D32
Then the rendered sankey node Savings has outline #2E7D32
Then the rendered sankey node Housing is filled #1565C0
Then the rendered sankey node Housing has outline #1565C0
Then the rendered sankey node Discretionary is filled #EF6C00
Then the rendered sankey node Discretionary has outline #EF6C00
Then the rendered sankey node Budget is filled #6A1B9A
Then the rendered sankey node Budget has outline #6A1B9A
Then the rendered sankey node Budget has corner radius 4
Then the rendered sankey node Salary has corner radius 4
Then the rendered sankey node Rent has corner radius 4
# UniformWidth only reshapes the ribbons between their faces; each still carries its flow end to end.
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
