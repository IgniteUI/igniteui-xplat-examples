# Transition-in animation: once the animation completes the lines sit on the data values.
Then this category chart will have 3 visible series of Line type
Then this category chart will have xAxis labels matching the Year column of sample data named EnergyRenewableGeneration
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named EnergyRenewableGeneration within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the America column of sample data named EnergyRenewableGeneration within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the China column of sample data named EnergyRenewableGeneration within small tolerance
Then this category chart will have yAxis title with 'TWh' text
# Replaying the transition ends exactly where it began, so the editor's duration slider is first set to its 2 second
# maximum (which itself replays the transition), and "Reload Chart" is then caught replaying it; once it settles the
# lines are back on the data.
When we move the 'Transition Duration' slider in the property editor panel to 2000
When we disable waiting for animation idle
When we click the 'Reload Chart' row in the property editor panel
Then an animation will be running
When we enable waiting for animation idle
When we wait for chart animations to complete
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named EnergyRenewableGeneration within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the America column of sample data named EnergyRenewableGeneration within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the China column of sample data named EnergyRenewableGeneration within small tolerance
