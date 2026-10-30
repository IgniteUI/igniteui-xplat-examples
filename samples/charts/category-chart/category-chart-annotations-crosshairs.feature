# Column chart of TemperatureAnnotatedData (Month, Temperature) with both crosshairs snapped to data and their axis
# annotations at precision 0: hovering Jun puts the crosshair on Jun, whose Temperature is 13.
Then this category chart will have 1 visible series of Column type
When the user hovers over category point with label Jun
When we are talking about the CrosshairLayer layer
And we are talking about the axis with name xAxis
Then the crosshair will have annotation labels with values: Jun
When we are talking about the axis with name yAxis
Then the crosshair will have annotation labels with values: 13
