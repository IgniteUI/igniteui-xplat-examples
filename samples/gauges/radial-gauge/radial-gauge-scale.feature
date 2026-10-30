# Scale: a DodgerBlue scale from 135° to 45° clockwise with a 1° fitted oversweep (extents 0.45-0.575),
# 0 to 80 with interval 10, value 50.
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's scale is colored DodgerBlue
Then this radial gauge's scale visual starts at angle 135 and ends at angle 45 assuming 1 degrees of fitted oversweep
Then this radial gauge's needle visual will be rendered at an angle of 303.75 degrees
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
