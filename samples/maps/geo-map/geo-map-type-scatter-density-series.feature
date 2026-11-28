# Documentation: components/geo-map-type-scatter-density-series.mdx.
# AusPlaces.csv: Zuytdorp Point, Mount Zion and Mount Zeil. The southeast ocean
# control is more than four degrees from the nearest input point.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
Then the map named map will fit geographic region 110, -45, 45, 35
And geographic density series named hdSeries in map map will render heat at these locations:
  | Longitude | Latitude  | Heat    |
  | 113.3     | -26.4     | Present |
  | 138.20853 | -33.19381 | Present |
  | 132.3958  | -23.4018  | Present |
  | 154       | -44       | Empty   |
