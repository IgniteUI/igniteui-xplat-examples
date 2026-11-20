//begin imports
import { FunctionComponent } from 'react';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IChartTooltipProps } from 'igniteui-react-core';
//end imports

import { CodeGenHelper } from 'igniteui-react-core';

export class TestsDoughnutTooltips {
    //begin eventHandler
    public testsDoughnutTooltips(): void {
        const data = CodeGenHelper.findByName<any>('TestsDoughnutTooltipBindings');
        if (data == null || typeof data.value !== 'string') {
            throw new Error('Doughnut tooltip bindings were not provided');
        }
        const bindings = JSON.parse(data.value);
        const templates = new Map<string, FunctionComponent<IChartTooltipProps>>();
        for (const name of Object.keys(bindings)) {
            const series = CodeGenHelper.findByName<IgrRingSeries>(name);
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
                templates.set(key, (props: IChartTooltipProps) => {
                    const context = props.dataContext;
                    const value = member === 'Label' ? context.itemLabel : context.item[valuePath];
                    return <div>{value == null ? '' : String(value)}</div>;
                });
            }
            series.tooltipTemplate = templates.get(key);
        }
    }
    //end eventHandler
}
