# Overlay text on value layers: a green dashed ValueOverlay at 435, a purple dashed ValueLayer at the average Open
# (186.5026) and a green DataAnnotationSliceLayer at 50, each with its own overlay text, over the StockTesla Open line.
Then this chart will have a title with attributes:
  | Text |
  | This sample demonstrates the DataAnnotationSliceLayer with overlay text compared against the value layers in the DataChart. |
When we are talking about the series with name series1
Then this series shapes will match the Open column of sample data named StockTesla within small tolerance
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of 0 and a maximum value of 550
Then the axis will have a value overlay named valueOverlay with axis value 435
When we are talking about the series with name valueOverlay
Then the value overlay will display a line with color green
Then the value overlay will display a line with thickness 2
When we are talking about the axis with name yAxis
# CALIBRATE: axis annotation text of the Average value layer (raw average 186.5026)
Then this axis will have a value layer with axis annotation values: 186.50
Then the data annotation slice layer named 'AnnoLayer' will have horizontal lines at the following positions: 50
Then the data annotation slice layer named 'AnnoLayer' will have linear annotations as follows:
  | Orientation | LinePosition | OverlayText |
  | Horizontal | 50 | OverlayText on DataAnnotationSliceLayer |
