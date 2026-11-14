# Radial column chart whose CategoryAngleAxis label mode/extent are driven by the editor; initial state is the default (Auto) label mode.
# Changing LabelMode/LabelExtent needs a When-form of "angle axis has label mode X" (exists as Given only) plus a
# Then step that asserts label placement; see the sidecar report.
Then this legend will have items with text: Ronaldo,Messi
When we are talking about the axis with name angleAxis
Then this axis will contain a labels for Dribbling, Passing, Finishing, Free Kicks, Penalties, Physical, Team Play, Heading
When we are talking about the axis with name radiusAxis
Then this axis will contain a labels for 0, 2, 4, 6, 8, 10
Then this axis range will have a minimum value of 0 and a maximum value of 10
When we are talking about the series with name RadialColumnSeries1
Then this series shapes will match these radial values within small tolerance:
  | Label      | Value |
  | Dribbling  | 8     |
  | Passing    | 8     |
  | Finishing  | 10    |
  | Free Kicks | 8     |
  | Penalties  | 9     |
  | Physical   | 10    |
  | Team Play  | 7     |
  | Heading    | 9     |
When we are talking about the series with name RadialColumnSeries2
Then this series shapes will match these radial values within small tolerance:
  | Label      | Value |
  | Dribbling  | 10    |
  | Passing    | 10    |
  | Finishing  | 10    |
  | Free Kicks | 9     |
  | Penalties  | 7     |
  | Physical   | 7     |
  | Team Play  | 9     |
  | Heading    | 6     |
