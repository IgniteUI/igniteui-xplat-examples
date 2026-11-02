# Semi-circular gauge: 0-80 (interval 10, value 10) on a 135°->45° #0B8FED scale with a fitted #FCFCFC
# backing (#D6D6D6 4px outline), a #9F9FA0 'Needle' needle with CircleOverlay pivot, labels at 0.6 and
# rgba(51,51,51,1)=#333333 major / rgba(73,73,73,1)=#494949 minor ticks (4 per interval).
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's needle visual will be rendered at an angle of 168.75 degrees
Then this radial gauge's needle visual will be #9F9FA0 in color
Then this radial gauge's needle visual will have a #9F9FA0 outline
Then this radial gauge's pivot visual will be #9F9FA0 in color
Then this radial gauge's pivot visual will have a #9F9FA0 outline
Then this radial gauge's scale is colored #0B8FED
Then this radial gauge's backing shape will be #FCFCFC with a #D6D6D6 outline that is 4 pixels thick
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
Then this radial gauge will have all labels at 60 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# The font is '15px Verdana'; labels export their font size in pixels.
Then this radial gauge will have abels will have font size 15
Then this radial gauge will have major tickmarks that are colored #333333 and have a thickness of 1
Then this radial gauge will have minor tickmarks that are colored #494949 and have a thickness of 1
Then this radial gauge will have 32 minor tickmarks
