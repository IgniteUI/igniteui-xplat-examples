//begin imports
import { IgrTreeGrid, IgrSummaryResult, IgrNumberSummaryOperand } from 'igniteui-react-grids';
//end imports

export class WebTreeGridCustomNumberSummary {
//begin template
//begin content
    public webTreeGridCustomNumberSummary(data: any[]): IgrSummaryResult[] {
        const result: any[] = [];
        // result.push({
        //     key: 'Min',
        //     label: 'Min',
        //     summaryResult: IgrNumberSummaryOperand.min(data)
        // });
        // result.push({
        //     key: 'max',
        //     label: 'Max',
        //     summaryResult: IgrNumberSummaryOperand.max(data)
        // });
        //TODO: min/max need fixing

        return result;
    }
//end content
//end template
}
