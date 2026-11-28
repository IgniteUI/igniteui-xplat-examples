# Dashboard tile titled "Sample Gauge" given a single row with a single value (DashboardGaugeDataSource: Value 40)
# infers a radial gauge.
# Documentation: docs/xplat/src/content/en/components/dashboard-tile.mdx
Then the dashboard tile will have title 'Sample Gauge'
And the dashboard tile will be displaying a RadialGauge
And the dashboard tile will report the Auto visualization
And the dashboard tile will report no renderer errors
# The inferred scale is 0..50; 40 is 80% through its default clockwise 135..405 degree sweep.
And this radial gauge's needle visual will be rendered at an angle of 351 degrees
