//begin imports
import { IgcHierarchicalGridComponent, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridCellEditEnter {
    //begin eventHandler
    public webHierarchicalGridCellEditEnter(args: CustomEvent<IgcGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }
    //end eventHandler
}