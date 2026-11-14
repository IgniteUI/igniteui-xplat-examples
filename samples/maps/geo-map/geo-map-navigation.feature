# NO ASSERTION YET - needs a new step (see sidecar report). This file has no Then on purpose: the generator
# rejects it until a step is approved or the sample JSON opts out of sampleTesting.
# Demonstrates: navigating map content. MapNavigationOnViewInit calls ZoomToGeographic(-134.5, 16, 70, 37) - the
# contiguous United States - matching the property editor's initial MapRegion value UnitedStates.
# Requested step: Then this map will show the geographic region -134.5, 16, 70, 37 within small tolerance
#   (the map's actual window rect converted to geographic coordinates; the map widens one dimension to keep its
#   aspect ratio, so the step should assert the region is contained and fills the window in one dimension)
