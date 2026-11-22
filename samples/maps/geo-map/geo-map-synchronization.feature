# Both maps use the SeriesViewer synchronization described in
# components/charts/features/chart-synchronization.mdx.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
Then the map named map will have window rect 0,0,1,1
And the map named secondMap will have window rect 0,0,1,1
When we set the map named map window rect to 0.25,0.2,0.5,0.5
Then the map named map will have window rect 0.25,0.2,0.5,0.5
And the map named secondMap will have window rect 0.25,0.2,0.5,0.5
When we set the map named secondMap window rect to 0.1,0.3,0.6,0.6
Then the map named secondMap will have window rect 0.1,0.3,0.6,0.6
And the map named map will have window rect 0.1,0.3,0.6,0.6
