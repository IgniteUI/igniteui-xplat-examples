//begin imports
import { IgcTreeGridComponent, IgcSummaryResult, IgcNumberSummaryOperand } from 'igniteui-webcomponents-grids/grids';
//end imports

export class WebTreeGridCustomNumberSummary {
//begin template
//begin content
    public webTreeGridCustomNumberSummary(data: any[]): IgcSummaryResult[] {
        const result = [];
        result.push({
            key: 'Min',
            label: 'Min',
            summaryResult: IgcNumberSummaryOperand.min(data)
        });
        result.push({
            key: 'max',
            label: 'Max',
            summaryResult: IgcNumberSummaryOperand.max(data)
        });

        return result;
    }
//end content
//end template
}
