//begin eventHandler
class HGridCustomSummary {
    operate(data, allData, fieldName) {
        const result = [];
        result.push({
            key: 'artists',
            label: 'Artists',
            summaryResult: allData.length
        });
        const totalAwards = fieldName === 'GrammyAwards' && data.length ? data.reduce((a, b) => +a + +b, 0) : 0;
        result.push({
            key: 'totalAwards',
            label: 'Total Grammy Awards',
            summaryResult: totalAwards
        });
        const awardWinners = allData.filter(r => r['HasGrammyAward']).length;
        result.push({
            key: 'awardWinners',
            label: 'Award Winners',
            summaryResult: awardWinners
        });
        const totalNominations = allData.reduce((sum, r) => sum + (r['GrammyNominations'] || 0), 0);
        result.push({
            key: 'totalNominations',
            label: 'Total Grammy Nominations',
            summaryResult: totalNominations
        });

        return result;
    }
}
igRegisterScript("HGridCustomSummary", (event) => {
    if (event.detail.field === "GrammyAwards") {
        event.detail.summaries = HGridCustomSummary;
    }
}, false);
//end eventHandler
