# Documentation: components/geo-map-type-scatter-area-series.mdx.
# WorldTemperatures has these 0/10/20/30 C isotherm vertices. Pixel centers can
# interpolate slightly away from a vertex; allow eight premultiplied channel levels.
Then geographic area series named areaSeries in map geoMap will render these isotherm colors within 8 per channel:
  | Longitude | Latitude | Color                  |
  | 2         | -54.8    | rgba(32,146,252,0.5)    |
  | -1        | -42.6    | rgba(14,194,14,0.5)     |
  | 1         | -15.8    | rgba(252,120,32,0.5)    |
  | 33.8      | 20       | rgba(252,32,32,0.5)     |
