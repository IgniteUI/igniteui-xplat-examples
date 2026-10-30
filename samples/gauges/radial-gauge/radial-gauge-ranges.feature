# Ranges: two ranges 10-25 and 25-40 (extents 0.5-0.57) colored by rangeBrushes #A4BD29/#F86232 on the
# default 135°->45° scale from 0 to 80 (interval 10); the needle sits at the maximum (80).
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then the ranges along the radial gauge, sorted by angle, will have:
  | Start Angle | End Angle | Inner Start Percentage | Inner End Percentage | Outer Start Percentage | Outer End Percentage |
  | 168.75 | 219.375 | 50 | 50 | 57 | 57 |
  | 219.375 | 270 | 50 | 50 | 57 | 57 |
Then the ranges along the radial gauge will have the following colors:
  | Color |
  | #A4BD29 |
  | #F86232 |
Then this radial gauge's needle visual will be rendered at an angle of 45 degrees
Then this radial gauge, with labels sorted by numeric value, will have labels reading:
  | labelValues |
  | 0 |
  | 10 |
  | 20 |
  | 30 |
  | 40 |
  | 50 |
  | 60 |
  | 70 |
  | 80 |
