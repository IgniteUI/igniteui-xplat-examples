//begin imports
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridSummaryTemplate {
//begin template
//begin content
public webHierarchicalGridSummaryTemplate = (e: { dataContext: IgrSummaryTemplateContext }) => {
    const summaryResults = e.dataContext.implicit;
    return (
        <div className="summary-temp">
            <span>{ summaryResults[0].label }<span>{ (summaryResults[0] as any).summaryResult }</span></span>
            <span>{ summaryResults[1].label }<span>{ (summaryResults[1] as any).summaryResult }</span></span>
            <span>{ summaryResults[2].label }<span>{ (summaryResults[2] as any).summaryResult }</span></span>
        </div>
    );
}
//end content

//begin supportingMethods
private singerSummary = {
    sum(data: any[] = []): number {
        return data.length && data.filter((el) => el === 0 || Boolean(el)).length ? data.filter((el) => el === 0 || Boolean(el)).reduce((a, b) => +a + +b) : 0;
    },
    operate(data?: any[], allData: any[] = [], fieldName = ''): any[] {
        const result = [] as any[];
        result.push({
            key: 'nominatedSingers',
            label: 'Nominated Singers',
            summaryResult: allData.filter((rec) => rec['GrammyNominations'] > 0).length
        });
        result.push({
            key: 'singersWithAwards',
            label: 'Singers with Awards',
            summaryResult: allData.filter((rec) => rec['GrammyAwards'] > 0).length
        });
        result.push({
            key: 'nominations',
            label: 'Total Nominations',
            summaryResult: this.sum(allData.map(r => r['GrammyNominations']))
        } );
        result.push({
            key: 'awards',
            label: 'Total Awards',
            summaryResult: this.sum(allData.map(r => r['GrammyAwards']))
        });
        return result;
    }
}
//end supportingMethods
//end template
}