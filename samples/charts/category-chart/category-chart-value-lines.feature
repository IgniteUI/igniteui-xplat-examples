# Value lines: the Auto value line resolves to each series' Maximum (America, Europe columns).
Then this category chart will have 2 visible series of Column type
Then this domain chart will have value lines with the following properties:
  | Orientation | Value |
  | horizontal  | 52 |
  | horizontal  | 80 |
Then this category chart will have xAxis labels matching the Year column of sample data named CountryRenewableElectricity
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
