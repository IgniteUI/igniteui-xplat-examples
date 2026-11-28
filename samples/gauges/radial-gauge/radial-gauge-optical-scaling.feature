# Optical scaling: opticalScalingEnabled with opticalScalingSize 500, so label fonts scale with the gauge size:
# Fonts follow the exported viewport, including native device-pixel rounding. No step reads the title font.
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
Then this radial gauge's label font will scale from DEFAULT at optical size 500
When this radial gauge is resized to 240x240
# 240 of the 500px opticalScalingSize scales the default label size to 12 * 0.48. Not 250: half a device pixel
# at 125% (312.5), which a head that rounds layout to device pixels snaps to 249.
Then this radial gauge's label font will scale from DEFAULT at optical size 500
When we click the 'Optical Scaling' row in the property editor panel
Then this radial gauge will have abels will have font size DEFAULT
When we click the 'Optical Scaling' row in the property editor panel
Then this radial gauge's label font will scale from DEFAULT at optical size 500
