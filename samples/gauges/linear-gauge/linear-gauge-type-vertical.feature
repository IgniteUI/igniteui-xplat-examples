# Vertical gauges: three vertical gauges with four 25-wide ranges each and a #494949 'Needle' needle.
# Several gauges are hydrated; the last one in the sample JSON (gauge3, value 40, ranges #CF0000/#FF0000/#FD3939/#FA6363) is the current gauge the steps read.
Then this linear gauge's needle will be at 40
Then this liniear gauge will have 'needle' needle shape
Then this linear gauge will have #494949 needle with 1px #494949 thickness
Then this linear gauge will have 4 range/ranges
Then linear gauge range1 will start from 0 and will end in 25
Then linear gauge range1 will be colored in #CF0000
Then linear gauge range1 will have outline colored in #CF0000
Then linear gauge range2 will start from 25 and will end in 50
Then linear gauge range2 will be colored in #FF0000
Then linear gauge range2 will have outline colored in #FF0000
Then linear gauge range3 will start from 50 and will end in 75
Then linear gauge range3 will be colored in #FD3939
Then linear gauge range3 will have outline colored in #FD3939
Then linear gauge range4 will start from 75 and will end in 100
Then linear gauge range4 will be colored in #FA6363
Then linear gauge range4 will have outline colored in #FA6363
Then linear gauge labels count should be 11
Then linear gauge labels should start from 0
Then linear gauge labels should end with 100
Then Each linear gauge label should be with 10 bigger than the label before
Then the bottommost linear gauge label should have 0 for its value
Then the topmost linear gauge label should have 100 for its value
# The tick analyzer separates major from minor ticks by stroke thickness (2 = major, 1 = minor), so when
# both share a thickness the count below is majors plus minors.
Then All 51 linear gauge minor ticks will have thickness of 1
Then All 51 linear gauge minor ticks will have Gray color
Then this linear gauge scale will have #E0DFDF background
