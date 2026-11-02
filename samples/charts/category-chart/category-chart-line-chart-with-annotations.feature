# Line chart of EnergyRenewableGeneration.America (thickness 2, circle markers). Its final value annotation (38) is not
# asserted: the chart computes its plot area margin, and the final value steps place annotations by the axis viewport.
Then this category chart will have 1 visible series of Line type
Then this category chart will have xAxis labels matching the Year column of sample data named EnergyRenewableGeneration
Then this category chart will have yAxis title with 'TWh' text
When we are talking about the series at index 0
Then this series shapes will match the America column of sample data named EnergyRenewableGeneration within small tolerance
Then this series will have main shapes with thickness 2
Then this series will have markers with type Circle
# The editor turns each annotation off: callouts and final values are unchecked, and the crosshairs set to None.
When we click the 'Callouts' row in the property editor panel
Then this domain chart will not have a CalloutLayer annotation layer
When we click the 'Final Values' row in the property editor panel
Then this domain chart will not have a FinalValueLayer annotation layer
When we choose 'None' from the 'Crosshairs' row in the property editor panel
Then this domain chart will not have a CrosshairLayer annotation layer
