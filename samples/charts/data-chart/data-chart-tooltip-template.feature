# ColumnSeries per energy source with a tooltip of its own instead of the default tooltip: the hovered country's whole
# production mix, under a title naming the country.
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Canada, China, Russia, Australia, United States, France
When we are talking about the series with name series1
Then this series shapes will match the Coal column of sample data named EnergyProductionByCountry within small tolerance
When the user hovers over category point with label China
Then this series will have default tooltips with these properties:
  | PointsAtSeries | PointsAtLabel | TooltipText                                                        |
  | series1        | China         | China Production\nCoal: 925\nHydro: 625\nNuclear: 400\nGas: 350\nOil: 200 |
When we are talking about the series with name series2
Then this series shapes will match the Hydro column of sample data named EnergyProductionByCountry within small tolerance
When we are talking about the series with name series3
Then this series shapes will match the Nuclear column of sample data named EnergyProductionByCountry within small tolerance
When we are talking about the series with name series4
Then this series shapes will match the Gas column of sample data named EnergyProductionByCountry within small tolerance
When we are talking about the series with name series5
Then this series shapes will match the Oil column of sample data named EnergyProductionByCountry within small tolerance
