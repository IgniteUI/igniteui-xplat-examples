# Sample template: 0-100 radial gauge (interval/label interval 10, labels at 0.65, value 50) on a 135°->45°
# #dddddd scale with a #FCFCFC backing outlined dodgerblue 5px.
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
  | 90 |
  | 100 |
Then this radial gauge will have all labels at 65 % distance from the center
Then this radial gauge's needle visual will be rendered at an angle of 270 degrees
Then this radial gauge's scale is colored #dddddd
Then this radial gauge's backing shape will be #FCFCFC with a dodgerblue outline that is 5 pixels thick
