# Styled polar areas: Wind/Boat speed by direction with per-series brushes/outlines, white circle markers, 30-degree angle and 25-unit radius intervals.
Then this legend will have items with text: Wind Speed,Boat Speed
When we are talking about the axis with name angleAxis
Then this axis will contain a labels for 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330
When we are talking about the axis with name radiusAxis
Then this axis will contain a labels for 0, 25, 50, 75, 100
Then this axis range will have a minimum value of 0 and a maximum value of 100
When we are talking about the series with name PolarAreaSeries1
Then this polar series markers will match these data points:
  | Angle | Radius |
  | 0     | 90     |
  | 45    | 65     |
  | 90    | 45     |
  | 135   | 25     |
  | 180   | 0      |
  | 225   | 25     |
  | 270   | 45     |
  | 315   | 65     |
  | 360   | 90     |
Then this series will have markers with type Circle
Then this series will have main shapes with fill #8CE7D9
Then this series will have main shapes with outline #8CE7D9
Then this series will have markers with fill white and outline #8CE7D9
Then this series will have main shapes with thickness 1
When we are talking about the series with name PolarAreaSeries2
Then this polar series markers will match these data points:
  | Angle | Radius |
  | 0     | 70     |
  | 45    | 35     |
  | 90    | 25     |
  | 135   | 15     |
  | 180   | 0      |
  | 225   | 15     |
  | 270   | 25     |
  | 315   | 35     |
  | 360   | 70     |
Then this series will have markers with type Circle
Then this series will have main shapes with fill #EE5879
Then this series will have main shapes with outline #EE5879
Then this series will have markers with fill white and outline #EE5879
Then this series will have main shapes with thickness 1
