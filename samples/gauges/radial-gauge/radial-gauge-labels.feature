# Labels and titles: labels every 10 from 0 to 80 on a 135°->45° #DDDDDD scale; the title displays the needle
# value (50) and the subtitle reads 'MPH'. No step can read gauge title/subtitle text yet (see report).
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
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
Then this radial gauge's needle visual will be rendered at an angle of 303.75 degrees
Then this radial gauge's scale is colored #DDDDDD
