//begin imports
//end imports

public class TestsAddDataPieNumberFormatter {

    //begin eventHandler
    //Swift: Action
    public func testsAddDataPieNumberFormatter() {

        let dataPie = CodeGenHelper.getDescription(IgsDataPieChart.self, "content")!

        dataPie.sliceLabelFormatSpecifiers = [
            IgsNumberFormatSpecifier().apply {
                $0.locale = "en-US"
                $0.minimumIntegerDigits = 4
                $0.minimumFractionDigits = 2
                $0.maximumFractionDigits = 2
                $0.useGrouping = false
            }
        ]

        dataPie.othersSliceLabelFormatSpecifiers = [
            IgsNumberFormatSpecifier().apply {
                $0.locale = "en-US"
                $0.minimumIntegerDigits = 4
                $0.minimumFractionDigits = 2
                $0.maximumFractionDigits = 2
                $0.useGrouping = false
            }
        ]
    }
    //end eventHandler
}
