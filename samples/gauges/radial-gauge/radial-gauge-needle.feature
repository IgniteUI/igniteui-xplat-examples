# Needle: a DodgerBlue NeedleWithBulb needle (1px DodgerBlue outline) with a #9F9FA0 CircleOverlay pivot
# (1px outline) pointing at 50 on the default 135°->45° scale from 0 to 80.
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's needle visual will be rendered at an angle of 303.75 degrees
Then this radial gauge's needle visual will be DodgerBlue in color
Then this radial gauge's needle visual will have a DodgerBlue outline
Then this radial gauge's needle visual will have a stroke thickness of 1
Then this radial gauge's pivot visual will be #9F9FA0 in color
Then this radial gauge's pivot visual will have a #9F9FA0 outline
Then this radial gauge's pivot visual will have a stroke thickness of 1
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
