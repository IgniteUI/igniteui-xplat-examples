# Toolbar with two custom ToolActionLabel tools ("Custom Icon", "Custom Icon 2") whose SVG icons are registered in
# onViewInit (ToolbarCustomIconOnViewInit), next to the built-in tools of a line CategoryChart
# (CountryRenewableElectricity: Europe, China, America by Year).
Given the sample does not alter its data's casing
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
# onViewInit (ToolbarCustomIconOnViewInit) registers CustomIcon from SVG text and CustomIcon2 from a data URL that
# points at svgrepo.com; the test re-registers CustomIcon2 from an inline PNG data URI so it does not depend on the network.
When this toolbar registers a custom icon named "CustomIcon2" in collection "CustomCollection2" from data URL "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
Then the toolbar action "CustomIconName" will have a custom icon
Then the toolbar action "CustomIconName2" will have an icon from data URL "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
Then this category chart will have xAxis labels matching the Year column of sample data named CountryRenewableElectricity
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
