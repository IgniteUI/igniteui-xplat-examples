//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridAdvancedFilteringToggle {
    //begin eventHandler
    public webGridAdvancedFilteringToggle(): void {
        const toolbar = this.gridToolbar;
        const advancedFiltering = toolbar.querySelector('igc-grid-toolbar-advanced-filtering') as HTMLElement;
        if (advancedFiltering) {
            advancedFiltering.style.display = advancedFiltering.style.display === 'none' ? '' : 'none';
        }
    }
    //end eventHandler
}