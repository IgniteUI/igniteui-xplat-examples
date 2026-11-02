# ColumnSeries per energy source with a custom tooltip template (DataChartProductionTooltipTemplate) instead of the default tooltip.
# The template has no GTK implementation, so only the columns it describes are asserted here (see report).
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Canada, China, Russia, Australia, United States, France
When we are talking about the series with name series1
Then this series shapes will match the Coal column of sample data named EnergyProductionByCountry within small tolerance
When we are talking about the series with name series2
Then this series shapes will match the Hydro column of sample data named EnergyProductionByCountry within small tolerance
When we are talking about the series with name series3
Then this series shapes will match the Nuclear column of sample data named EnergyProductionByCountry within small tolerance
When we are talking about the series with name series4
Then this series shapes will match the Gas column of sample data named EnergyProductionByCountry within small tolerance
When we are talking about the series with name series5
Then this series shapes will match the Oil column of sample data named EnergyProductionByCountry within small tolerance
