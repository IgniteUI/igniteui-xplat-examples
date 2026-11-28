# RadialSankeySeries on a ProportionalCategoryAngleAxis: SankeyIncomeStageWeights gives the Income, Budget, Bucket and
# Detail stages angular shares of 1:4:2:3 around the SankeyIncomeFlow edge list. The stage labels, nodes and ribbons are
# asserted; the proportional stage widths are not, as no step reads a proportional angle axis's sweep per category.
When we wait for chart animations to complete
When we are talking about the axis with name angleAxis
Then this axis will contain a labels for Income, Budget, Bucket, Detail
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
