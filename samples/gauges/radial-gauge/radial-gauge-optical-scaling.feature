# Optical scaling: opticalScalingEnabled with opticalScalingSize 500, so label fonts scale with the gauge size:
# 100% (the default label size) at 500px and 50% at 250px. No step reads the title font (see report).
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
Then this radial gauge will have abels will have font size DEFAULT
When this radial gauge is resized to 250x250
# Half of opticalScalingSize halves the default label size (12 -> 6).
Then this radial gauge will have abels will have font size 6
