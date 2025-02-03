//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridExportingToggle {
    //begin eventHandler
    public webGridExportingToggle(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const toolbar = this.gridToolbar;
        const toolbarExporter = toolbar.querySelector('igc-grid-toolbar-exporter') as HTMLElement;
        if (toolbarExporter) {
            toolbarExporter.style.display = toolbarExporter.style.display === 'none' ? '' : 'none';
        }
    }
    //end eventHandler
}