# Ring gauge: full-circle scale (0°->360°) from 0 to 120 (labels every 10 at 0.85; 120 coincides with 0 and
# is omitted) with no needle; three concentric tracks, each a #E0DFDF 0-120 background ring under a
# progress ring: #10B401 to 90, #FDB417 to 80, #FF0000 to 60.
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
  | 110 |
Then this radial gauge will have all labels at 85 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# The label font is '15px Verdana'.
Then this radial gauge will have abels will have font size 15
Then this radial gauge will have major tickmarks that are colored #79797A and have a thickness of 1
# The minor ticks are transparent but still drawn, so all 48 are counted.
Then this radial gauge will have 48 minor tickmarks
# Every range starts at 0°, so ranges tied on angle keep their drawing order: each track's full-circle
# background ring is drawn under its progress ring.
Then the ranges along the radial gauge will have the following colors:
  | Color |
  | #E0DFDF |
  | #10B401 |
  | #E0DFDF |
  | #FDB417 |
  | #E0DFDF |
  | #FF0000 |
# needleShape is None, so no needle is drawn.
Then this radial gauge's needle is not displayed
