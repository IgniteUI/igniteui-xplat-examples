# Direction gauges: compass-style full circles (-90°->270°). The content gauge (gauge2, hydrated last and so
# the current gauge) runs 0-360 with labels every 45 at 0.75, a DodgerBlue triangle needle at 270 and no
# pivot; the 0/360 labels coincide so 360 is omitted.
# The radial gauge analyzer needs a square viewport; gauge2 is 250px tall, so pin it to 250x250.
When this radial gauge is resized to 250x250
Then this radial gauge, with labels sorted by numeric value, will have labels reading:
  | labelValues |
  | 0 |
  | 45 |
  | 90 |
  | 135 |
  | 180 |
  | 225 |
  | 270 |
  | 315 |
Then this radial gauge will have all labels at 75 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# CALIBRATE: font is '15px Verdana'; the exported label FontSize unit (px vs pt) on this platform is unverified.
Then this radial gauge will have abels will have font size 15
Then this radial gauge's needle visual will be rendered at an angle of 180 degrees
Then this radial gauge's needle visual will be DodgerBlue in color
Then this radial gauge has no visible pivot shape
Then this radial gauge's scale is colored #E0DFDF
Then this radial gauge will have major tickmarks that are colored #79797A and have a thickness of 1
Then this radial gauge will have minor tickmarks that are colored #79797A and have a thickness of 1
Then this radial gauge will have 16 minor tickmarks
