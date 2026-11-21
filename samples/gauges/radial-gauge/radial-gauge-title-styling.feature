# Title styling: the title shows the needle value (50) in 50px bold italic red Arial snapped to the needle
# pivot, subtitle 'MPH', on a 0-100 gauge with interval 10. No step can read the gauge title/subtitle yet
# (see report); the value the title displays is asserted through the needle.
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's needle visual will be rendered at an angle of 270 degrees
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
  | 90 |
  | 100 |
