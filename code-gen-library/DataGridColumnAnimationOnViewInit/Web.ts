//begin imports
import { ColumnShowingAnimationMode, IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridColumnAnimationOnViewInit {
    //begin eventHandler
    public dataGridColumnAnimationOnViewInit(): void {
        const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
        grid.columnAddingAnimationMode = ColumnShowingAnimationMode.SlideFromLeft;
    }
    //end eventHandler
}
