# RadialSankeySeries over the SankeyIncomeFlow edge list with the Highlighted column overlaid on each flow
# (highlightedValuesDisplayMode Overlay). The base nodes, one ribbon per link and the callouts are asserted below; the
# overlaid Highlighted amounts are not: no step reads a Sankey's highlight-layer shapes, and the value steps are linear only.
When we wait for chart animations to complete
When we are talking about the series with name radialSankey
Then the rendered sankey node Salary is rendered
Then the rendered sankey node Bonus is rendered
Then the rendered sankey node Budget is rendered
Then the rendered sankey node Housing is rendered
Then the rendered sankey node Savings is rendered
Then the rendered sankey node Discretionary is rendered
Then the rendered sankey node Rent is rendered
Then the rendered sankey node Utilities is rendered
Then the rendered sankey node ETFs is rendered
Then the rendered sankey node Emergency is rendered
Then the rendered sankey node Retirement is rendered
Then the rendered sankey node Dining is rendered
Then the rendered sankey node Travel is rendered
Then the rendered sankey node Entertainment is rendered
Then the rendered sankey ribbon Salary->Budget count is 1
Then the rendered sankey ribbon Bonus->Budget count is 1
Then the rendered sankey ribbon Budget->Housing count is 1
Then the rendered sankey ribbon Budget->Savings count is 1
Then the rendered sankey ribbon Budget->Discretionary count is 1
Then the rendered sankey ribbon Housing->Rent count is 1
Then the rendered sankey ribbon Housing->Utilities count is 1
Then the rendered sankey ribbon Savings->ETFs count is 1
Then the rendered sankey ribbon Savings->Emergency count is 1
Then the rendered sankey ribbon Savings->Retirement count is 1
Then the rendered sankey ribbon Discretionary->Dining count is 1
Then the rendered sankey ribbon Discretionary->Travel count is 1
Then the rendered sankey ribbon Discretionary->Entertainment count is 1
When we are talking about annotation layer nodeLabels targeting series radialSankey
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
