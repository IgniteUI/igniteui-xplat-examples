//begin imports
import { IgcHierarchicalGridComponent, IgcGridEditDoneEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridCellEditExit {
    //begin eventHandler
    public webHierarchicalGridCellEditExit(args: CustomEvent<IgcGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditExit'`;
        container.appendChild(message);
    }
    //end eventHandler
}
