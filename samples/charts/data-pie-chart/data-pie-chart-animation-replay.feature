# Replayable transition-in animation (Auto, Random speed, 1000ms, highlighting None) over
# EnergyGlobalDemand. Once the animation settles, every slice must reach its full share of the 100 total.
# The label and value members are inferred from the data: the label from Category, the value from Summary.
Given the sample does not alter its data's casing
Then the domain pie chart will have slices with the following properties:
  | Value | Label            |
  | 37    | Cooling - 37     |
  | 25    | Residential - 25 |
  | 12    | Heating - 12     |
  | 11    | Lighting - 11    |
  | 15    | Other - 15       |
# Replaying the transition ends exactly where it began, so the transition is lengthened to 5 seconds to catch the
# replay running right after the editor's button is clicked; once it settles every slice is back at its full share.
When this domain pie chart has a transition in duration of 5000 milliseconds
When we disable waiting for animation idle
When we click the 'Replay Animation' row in the property editor panel
Then an animation will be running
When we enable waiting for animation idle
When we wait for chart animations to complete
Then the domain pie chart will have slices with the following properties:
  | Value | Label            |
  | 37    | Cooling - 37     |
  | 25    | Residential - 25 |
  | 12    | Heating - 12     |
  | 11    | Lighting - 11    |
  | 15    | Other - 15       |
