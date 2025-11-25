//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridColumnPinningToggle {
    //begin eventHandler
    public webGridColumnPinningToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const toolbar = this.gridToolbar;
        const toolbarPinning = toolbar.querySelector('igc-grid-toolbar-pinning') as HTMLElement;
        if (toolbarPinning) {
            toolbarPinning.style.display = toolbarPinning.style.display === 'none' ? '' : 'none';
        }
    }
    //end eventHandler
}