# Backing: a fitted backing (#FCFCFC fill, DodgerBlue 5px outline, 5° oversweep, corner radius 10, extents
# 0.15-0.8) behind a 135°->45° #DDDDDD scale from 0 to 80 (interval 10, value 50).
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's backing shape will be #FCFCFC with a DodgerBlue outline that is 5 pixels thick
# CALIBRATE: the backing has a 10px corner radius; the fitted-backing analyzer has only been exercised with radius 0.
Then this radial guage will have a fitted backing shape that extends from 15 % from the center of the gauge to 80 % from the center of the gauge assuming 5 degrees overweep and 10 corner radius
Then this radial gauge's scale is colored #DDDDDD
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
