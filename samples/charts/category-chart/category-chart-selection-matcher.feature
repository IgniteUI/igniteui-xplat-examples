# Column chart of EnergyRenewableConsumption whose view-init code selects, through series matchers, Hydro at Europe
# and Wind at USA, in orange. The series are Year, Hydro, Solar, Wind and Other in palette order (Hydro #8961A9, Wind
# #82E9D9). The selections are made on a timer after the view is ready, so they are waited for.
When we wait for the selected series items collection to have 2 items
Then the selected series items collection will have the following items:
  | SeriesMemberPath | SeriesMemberPathType | DataItem                                                                 |
  | Hydro            | ValueMemberPath      | Location=Europe;Year=2019;Hydro=632.54;Solar=154;Wind=461.3;Other=220.3 |
  | Wind             | ValueMemberPath      | Location=USA;Year=2019;Hydro=271.16;Solar=108;Wind=303.4;Other=78.34    |
When we are talking about the series at index 1
Then this series will have labeled shapes with fill orange and outline #8961A9 at the following labels: Europe
When we are talking about the series at index 3
Then this series will have labeled shapes with fill orange and outline #82E9D9 at the following labels: USA
