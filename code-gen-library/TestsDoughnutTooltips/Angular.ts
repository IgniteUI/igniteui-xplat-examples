//begin imports
import { IgxRingSeriesComponent } from 'igniteui-angular-charts';
import { TemplateRef } from '@angular/core';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class TestsDoughnutTooltips {
    //begin eventHandler
    public testsDoughnutTooltips(): void {
        const data = CodeGenHelper.findByName<any>('TestsDoughnutTooltipBindings');
        if (data == null || typeof data.value !== 'string') {
            throw new Error('Doughnut tooltip bindings were not provided');
        }
        const bindings = JSON.parse(data.value);
        for (const name of Object.keys(bindings)) {
            const series = CodeGenHelper.findByName<IgxRingSeriesComponent>(name);
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
            const templateName = member === 'Value' ? 'doughnutValueTooltip' : 'doughnutLabelTooltip';
            const template = CodeGenHelper.findByName<TemplateRef<any>>(templateName);
            if (template == null) throw new Error('Missing tooltip template: ' + templateName);
            series.tooltipTemplate = template;
        }
    }
    //end eventHandler
}
