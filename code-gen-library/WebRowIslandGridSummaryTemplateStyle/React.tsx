//begin imports
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebRowIslandGridSummaryTemplateStyle {
//begin template
//begin content
public webRowIslandGridSummaryTemplateStyle = (e: { dataContext: IgrSummaryTemplateContext }) => {
    const summaryResults = e.dataContext.implicit;
    return (
        <div className="summary-temp">
            <span><strong>{ summaryResults[0].label }</strong><span>{ (summaryResults[0] as any).summaryResult }</span></span>
            <span><strong>{ summaryResults[1].label }</strong><span>{ (new Date((summaryResults[2] as any).summaryResult)).toDateString() }</span></span>
        </div>
    );
}
//end content
//end template
}