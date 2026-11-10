# Column chart of MovieFranchiseRevenue (TotalRevenue, HighestGrossing by Franchise) with no tooltip layer and a
# tooltip template on its series. The template's content is platform markup, so before the sample is displayed the
# series are given the same static text tooltip the series tooltip tests use, which the visual data reports.
Given this series has original static tooltip text
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
  | series_1_Column | Star Wars     | text        |
