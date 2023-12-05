//begin imports
import { IgcSummaryResult, IgcSummaryTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { html, nothing } from 'lit-html';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridOrderDateSummaryTemplate {
//begin template
//begin content
    public webGridOrderDateSummaryTemplate = (ctx: IgcSummaryTemplateContext) => {
        const summaryResults = ctx.implicit as IgcSummaryResult[];
        return html`<div class="summary-temp">
            <span><strong>${ summaryResults[0].label }</strong><span>${ summaryResults[0].summaryResult }</span></span>
            <span><strong>${ summaryResults[1].label }</strong><span>${ summaryResults[1].summaryResult }</span></span>
        </div>`;
    }
//end content
//begin supportingMethods
private discontinuedSummary = {
    sum(data: any[] = []): number {
        return data.length && data.filter((el) => el === 0 || Boolean(el)).length ? data.filter((el) => el === 0 || Boolean(el)).reduce((a, b) => +a + +b) : 0;
    },
    operate(data?: any[], allData: any[] = [], fieldName = ''): any[] {
        const result = [] as any[];
        result.push({
            key: 'products',
            label: 'Producs',
            summaryResult: data?.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: this.sum(data)
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Producs',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
        } );
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: this.sum(allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]))
        } );
        return result;
    }
}
//end supportingMethods
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