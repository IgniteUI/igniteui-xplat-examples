//begin imports
import { IgcHierarchicalGridComponent, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRowEdit {
    //begin eventHandler
    public webHierarchicalGridRowEdit(args: CustomEvent<IgcGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEdit'`;
        container.appendChild(message);
    }
    //end eventHandler
}