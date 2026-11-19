# Documentation: components/geo-map-binding-data-csv.mdx.
# Coordinates from the CSV: New York, Los Angeles and Chicago. The Gulf control
# is more than five degrees from the nearest input point and must stay empty.
Then the map named map will fit geographic region -130, 15, 65, 35
And geographic density series named hdSeries in map map will render heat at these locations:
  | Longitude | Latitude | Heat    |
  | -73.9249  | 40.6943  | Present |
  | -118.4068 | 34.1139  | Present |
  | -87.6861  | 41.8373  | Present |
  | -90       | 24       | Empty   |
