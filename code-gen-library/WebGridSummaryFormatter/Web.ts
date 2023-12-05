//begin imports
import { IgcSummaryResult, IgcSummaryOperand } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridSummaryFormatter {
//begin content
    public webGridSummaryFormatter(summary: IgcSummaryResult, summaryOperand: IgcSummaryOperand): string {
        const result = summary.summaryResult;
        if (summary.key !== "count" && result !== null && result !== undefined) {
            const format = new Intl.DateTimeFormat("en", { year: "numeric" });
            return format.format(new Date(result));
        }
        return result;
    }
//end content
}