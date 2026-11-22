# Documentation: components/geo-map-navigation.mdx — navigation through the region selector.
# Choose regions after layout, then verify their zoom windows and visible geographic bounds.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
When we choose 'Japan' from the 'Map Region' row in the property editor panel
Then the map named map will fit geographic region 122.7, 29.4, 27.5, 17
When we choose 'Hawaii' from the 'Map Region' row in the property editor panel
Then the map named map will fit geographic region -161.2, 18.5, 6.6, 4.8
When we choose 'UnitedStates' from the 'Map Region' row in the property editor panel
Then the map named map will fit geographic region -134.5, 16, 70, 37
