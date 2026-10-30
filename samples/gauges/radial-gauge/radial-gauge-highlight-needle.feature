# Highlight needle: value 30 drawn under a highlight needle at 50 (highlightValueDisplayMode Overlay, the
# label shows the highlight value) on the default 135°->45° scale from 0 to 100, interval/label interval 10,
# labels at 0.65. No step can read the highlight needle yet (see report); the scale and needle are asserted.
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
# With the highlight overlay, the exported needle is the value needle (30 -> 216°).
Then this radial gauge's needle visual will be rendered at an angle of 216 degrees
