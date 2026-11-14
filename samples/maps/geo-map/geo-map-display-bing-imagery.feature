# NO ASSERTION YET - needs a new step (see sidecar report). This file has no Then on purpose: the generator
# rejects it until a step is approved or the sample JSON opts out of sampleTesting.
# Demonstrates: two maps with BingMapsMapImagery - aerialMap (aboveContent) style AerialWithLabels and roadMap
# (content) style Road. The API key is a placeholder (REPLACE_WITH_BING_KEY) and Bing Maps basic accounts were shut
# down in June 2025, so no tiles can load; only the imagery configuration is assertable.
# Requested step: Then the map named <name> will have background imagery of type BingMapsMapImagery with imagery
#   style <style>
