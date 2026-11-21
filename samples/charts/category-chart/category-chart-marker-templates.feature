# Column chart of EnergyGenerationChange: one series per energy source over four locations, y axis fixed to -20..30
# every 10. Each series the chart makes is given a star svg marker as it is added.
Then this category chart will have 5 visible series of Column type
Then this category chart will have xAxis labels matching the Location column of sample data named EnergyGenerationChange
When we are talking about the series at index 0
Then this series shapes will match the Solar column of sample data named EnergyGenerationChange within small tolerance
Then this series marker template will match the svg:
"""
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 1.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
"""
Then this series will have markers visible
Then this series markers will be centered on their positions
When we are talking about the series at index 1
Then this series shapes will match the Coal column of sample data named EnergyGenerationChange within small tolerance
Then this series marker template will match the svg:
"""
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 1.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
"""
Then this series will have markers visible
Then this series markers will be centered on their positions
When we are talking about the series at index 2
Then this series shapes will match the Hydropower column of sample data named EnergyGenerationChange within small tolerance
Then this series marker template will match the svg:
"""
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 1.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
"""
Then this series will have markers visible
Then this series markers will be centered on their positions
When we are talking about the series at index 3
Then this series shapes will match the Wind column of sample data named EnergyGenerationChange within small tolerance
Then this series marker template will match the svg:
"""
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 1.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
"""
Then this series will have markers visible
Then this series markers will be centered on their positions
When we are talking about the series at index 4
Then this series shapes will match the Nuclear column of sample data named EnergyGenerationChange within small tolerance
Then this series marker template will match the svg:
"""
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 1.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
"""
Then this series will have markers visible
Then this series markers will be centered on their positions
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of -20 and a maximum value of 30
Then this axis will have labels visible with these values: 30, 20, 10, 0, -10, -20
