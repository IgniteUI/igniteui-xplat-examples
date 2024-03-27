//begin imports
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridSummaryTemplateStyle {
//begin template
//begin content
public webHierarchicalGridSummaryTemplateStyle = (e: { dataContext: IgrSummaryTemplateContext }) => {
    const summaryResults = e.dataContext.implicit;
    return (
        <div className="summary-temp">
            <span><strong>{ summaryResults[0].label }</strong><span>{ (summaryResults[0] as any).summaryResult }</span></span>
            <span><strong>{ summaryResults[1].label }</strong><span>{ (summaryResults[1] as any).summaryResult }</span></span>
            <span><strong>{ summaryResults[2].label }</strong><span>{ (summaryResults[2] as any).summaryResult }</span></span>
        </div>
    );
}
//end content
    public requiredStyles = `
<!--begin styles-->
.summary-temp {
	display: flex;
	flex-direction: column;
	margin: 0 1px;
	font-size: 14px;
	line-height: 24px;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;

	> * {
		padding: 8px 0;
		line-height: 18px;
		border-bottom: 1px dashed hsla(var(--igx-gray-400));

		&:last-child {
			border-bottom: none;
		}
	}
}

.summary-temp span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    justify-content: space-between;
    color: hsla(var(--ig-gray-900));
}

.summary-temp span span {
    user-select: all;
    max-width: 300px;
    padding-right: 8px;
}

.summary-temp span strong {
    font-size: 12px;
    text-transform: uppercase;
    min-width: 70px;
    justify-self: flex-start;
    text-align: left;
    color: hsla(var(--ig-secondary-600));
    user-select: none;
}
<!--end styles-->
    `;
//end template
}