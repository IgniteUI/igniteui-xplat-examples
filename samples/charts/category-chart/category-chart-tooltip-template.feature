# Column chart of MovieFranchiseRevenue (TotalRevenue, HighestGrossing by Franchise) with no tooltip layer and a
# tooltip of its own on each series, naming the franchise and both of its revenues.
Then this category chart will have 2 visible series of Column type
Then this category chart will have xAxis labels matching the Franchise column of sample data named MovieFranchiseRevenue
When we are talking about the series at index 0
Then this series shapes will match the TotalRevenue column of sample data named MovieFranchiseRevenue within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the HighestGrossing column of sample data named MovieFranchiseRevenue within small tolerance
When we are talking about the series at index 0
When the user hovers over category point with label Star Wars
Then this series will have default tooltips with these properties:
  | PointsAtSeries  | PointsAtLabel | TooltipText |
  | series_1_Column | Star Wars     | Franchise: Star Wars\nRevenue of All Movies: 10.32\nHighest Grossing Movie: $2.07 |
