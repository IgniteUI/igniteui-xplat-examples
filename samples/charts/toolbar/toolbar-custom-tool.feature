# Toolbar with two custom ToolActionLabel tools ("Custom Icon", "Custom Icon 2") whose SVG icons are registered in
# onViewInit (ToolbarCustomIconOnViewInit), next to the built-in tools of a line CategoryChart
# (CountryRenewableElectricity: Europe, China, America by Year).
Then the toolbar will have the following action names:
  | Name            |
  | CustomIconName  |
  | CustomIconName2 |
  | ZoomMenu        |
  | AnalyzeMenu     |
  | CopyMenu        |
Then the toolbar action "CustomIconName" will have title "Custom Icon"
Then the toolbar action "CustomIconName2" will have title "Custom Icon 2"
Then the toolbar action "CustomIconName" will appear before "CustomIconName2"
# CALIBRATE: requires the host to run the sample's onViewInit (ToolbarCustomIconOnViewInit) to register the SVG icons.
Then the toolbar action "CustomIconName" will have a custom icon
Then the toolbar action "CustomIconName2" will have a custom icon
Then this category chart will have xAxis labels matching the Year column of sample data named CountryRenewableElectricity
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
