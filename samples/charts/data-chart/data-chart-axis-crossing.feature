# Axis crossing: sin/cos scatter splines over -360..360 degrees with the x axis crossing the y axis at 0 and the y axis
# crossing the x axis at 0, so both axis lines and their inside labels meet at the origin.
When we are talking about the axis with name xAxis
Then this axis will cross axis named yAxis at value 0
Then this axis range will have a minimum value of -360 and a maximum value of 360
# CALIBRATE: the 0 label may be suppressed where the crossing axes meet
Then this axis will have labels visible with these values: -360, -320, -280, -240, -200, -160, -120, -80, -40, 0, 40, 80, 120, 160, 200, 240, 280, 320, 360
Then this axis will have a line with thickness of 1 pixels
Then this axis will have a line with Black color
When we are talking about the axis with name yAxis
Then this axis will cross axis named xAxis at value 0
Then this axis range will have a minimum value of -1.25 and a maximum value of 1.25
# A vertical axis lists its labels top to bottom.
Then this axis will have labels visible with these values: 1.25, 1, 0.75, 0.5, 0.25, 0, -0.25, -0.5, -0.75, -1, -1.25
Then this axis will have a line with thickness of 1 pixels
Then this axis will have a line with Black color
When we are talking about the series with name sinSeries
Then this series will have markers with type Circle
Then this series shapes will match these scatter values:
  | X | Y |
  | -360 | 0 |
  | -350 | 0.1736 |
  | -340 | 0.342 |
  | -330 | 0.5 |
  | -320 | 0.6428 |
  | -310 | 0.766 |
  | -300 | 0.866 |
  | -290 | 0.9397 |
  | -280 | 0.9848 |
  | -270 | 1 |
  | -260 | 0.9848 |
  | -250 | 0.9397 |
  | -240 | 0.866 |
  | -230 | 0.766 |
  | -220 | 0.6428 |
  | -210 | 0.5 |
  | -200 | 0.342 |
  | -190 | 0.1736 |
  | -180 | 0 |
  | -170 | -0.1736 |
  | -160 | -0.342 |
  | -150 | -0.5 |
  | -140 | -0.6428 |
  | -130 | -0.766 |
  | -120 | -0.866 |
  | -110 | -0.9397 |
  | -100 | -0.9848 |
  | -90 | -1 |
  | -80 | -0.9848 |
  | -70 | -0.9397 |
  | -60 | -0.866 |
  | -50 | -0.766 |
  | -40 | -0.6428 |
  | -30 | -0.5 |
  | -20 | -0.342 |
  | -10 | -0.1736 |
  | 0 | 0 |
  | 10 | 0.1736 |
  | 20 | 0.342 |
  | 30 | 0.5 |
  | 40 | 0.6428 |
  | 50 | 0.766 |
  | 60 | 0.866 |
  | 70 | 0.9397 |
  | 80 | 0.9848 |
  | 90 | 1 |
  | 100 | 0.9848 |
  | 110 | 0.9397 |
  | 120 | 0.866 |
  | 130 | 0.766 |
  | 140 | 0.6428 |
  | 150 | 0.5 |
  | 160 | 0.342 |
  | 170 | 0.1736 |
  | 180 | 0 |
  | 190 | -0.1736 |
  | 200 | -0.342 |
  | 210 | -0.5 |
  | 220 | -0.6428 |
  | 230 | -0.766 |
  | 240 | -0.866 |
  | 250 | -0.9397 |
  | 260 | -0.9848 |
  | 270 | -1 |
  | 280 | -0.9848 |
  | 290 | -0.9397 |
  | 300 | -0.866 |
  | 310 | -0.766 |
  | 320 | -0.6428 |
  | 330 | -0.5 |
  | 340 | -0.342 |
  | 350 | -0.1736 |
  | 360 | 0 |
When we are talking about the series with name cosSeries
Then this series will have markers with type Circle
Then this series shapes will match these scatter values:
  | X | Y |
  | -360 | 1 |
  | -350 | 0.9848 |
  | -340 | 0.9397 |
  | -330 | 0.866 |
  | -320 | 0.766 |
  | -310 | 0.6428 |
  | -300 | 0.5 |
  | -290 | 0.342 |
  | -280 | 0.1736 |
  | -270 | 0 |
  | -260 | -0.1736 |
  | -250 | -0.342 |
  | -240 | -0.5 |
  | -230 | -0.6428 |
  | -220 | -0.766 |
  | -210 | -0.866 |
  | -200 | -0.9397 |
  | -190 | -0.9848 |
  | -180 | -1 |
  | -170 | -0.9848 |
  | -160 | -0.9397 |
  | -150 | -0.866 |
  | -140 | -0.766 |
  | -130 | -0.6428 |
  | -120 | -0.5 |
  | -110 | -0.342 |
  | -100 | -0.1736 |
  | -90 | 0 |
  | -80 | 0.1736 |
  | -70 | 0.342 |
  | -60 | 0.5 |
  | -50 | 0.6428 |
  | -40 | 0.766 |
  | -30 | 0.866 |
  | -20 | 0.9397 |
  | -10 | 0.9848 |
  | 0 | 1 |
  | 10 | 0.9848 |
  | 20 | 0.9397 |
  | 30 | 0.866 |
  | 40 | 0.766 |
  | 50 | 0.6428 |
  | 60 | 0.5 |
  | 70 | 0.342 |
  | 80 | 0.1736 |
  | 90 | 0 |
  | 100 | -0.1736 |
  | 110 | -0.342 |
  | 120 | -0.5 |
  | 130 | -0.6428 |
  | 140 | -0.766 |
  | 150 | -0.866 |
  | 160 | -0.9397 |
  | 170 | -0.9848 |
  | 180 | -1 |
  | 190 | -0.9848 |
  | 200 | -0.9397 |
  | 210 | -0.866 |
  | 220 | -0.766 |
  | 230 | -0.6428 |
  | 240 | -0.5 |
  | 250 | -0.342 |
  | 260 | -0.1736 |
  | 270 | 0 |
  | 280 | 0.1736 |
  | 290 | 0.342 |
  | 300 | 0.5 |
  | 310 | 0.6428 |
  | 320 | 0.766 |
  | 330 | 0.866 |
  | 340 | 0.9397 |
  | 350 | 0.9848 |
  | 360 | 1 |
