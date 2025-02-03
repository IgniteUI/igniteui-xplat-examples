//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridColumnHidingToggle {
    //begin eventHandler
    public webGridColumnHidingToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const toolbar = this.gridToolbar;
        const toolbarHiding = toolbar.querySelector('igc-grid-toolbar-hiding') as HTMLElement;
        if (toolbarHiding) {
            toolbarHiding.style.display = toolbarHiding.style.display === 'none' ? '' : 'none';
        }
    }
    //end eventHandler
}