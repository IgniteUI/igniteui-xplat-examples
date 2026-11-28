# WorldCities point records are imported from .shp/.dbf and bound by longitude/latitude.
# ImportCompleted releases queued work after binding; no delay or render polling is needed.
Given the sample uses offline imagery responses from MapOfflineImageryResponse
When we are talking about the series with name symbolSeries
Then this series will have markers with type Circle
Then this series will have markers with fill White and outline rgb(2,102,196)
Then geographic symbol series named symbolSeries in map map will render markers at these locations within 1 pixels:
    | City      | Longitude          | Latitude           |
    | Tokyo     | 139.80918884277344 | 35.68305587768555  |
    | New York  | -74.0999984741211  | 40.75             |
    | Sao Paulo | -46.62289810180664 | -23.5813045501709 |
