//begin imports
import { IgcRingSeriesComponent } from 'igniteui-webcomponents-charts';
import { html } from 'lit';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class TestsDoughnutTooltips {
    //begin eventHandler
    public testsDoughnutTooltips(): void {
        const data = CodeGenHelper.findByName<any>('TestsDoughnutTooltipBindings');
        if (data == null || typeof data.value !== 'string') {
            throw new Error('Doughnut tooltip bindings were not provided');
        }
        const bindings = JSON.parse(data.value);
        const templates = new Map<string, (context: any) => ReturnType<typeof html>>();
        for (const name of Object.keys(bindings)) {
            const series = CodeGenHelper.findByName<IgcRingSeriesComponent>(name);
            if (series == null) throw new Error('Missing tooltip series: ' + name);
            const member = bindings[name];
            series.showDefaultTooltip = false;
            if (member == null) {
                series.tooltipTemplate = null;
                continue;
            }
            if (member !== 'Value' && member !== 'Label') {
                throw new Error('Unsupported tooltip member: ' + member);
            }
            const valuePath = series.valueMemberPath;
            const key = JSON.stringify([member, valuePath]);
            if (!templates.has(key)) {
                templates.set(key, (context: any) => {
                    const value = member === 'Label' ? context.itemLabel : context.item[valuePath];
                    return html`<div>${value == null ? '' : String(value)}</div>`;
                });
            }
            series.tooltipTemplate = templates.get(key);
        }
    }
    //end eventHandler
}
