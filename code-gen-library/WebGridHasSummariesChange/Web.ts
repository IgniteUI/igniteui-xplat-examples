//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridHasSummariesChange {
    //begin eventHandler
    public webGridHasSummariesChange(args: any): void {
        let newValue = args.primitiveValue as boolean;

        var column1 = this.grid.columns[3];
        var column2 = this.grid.columns[5];

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
    }
    //end eventHandler
}