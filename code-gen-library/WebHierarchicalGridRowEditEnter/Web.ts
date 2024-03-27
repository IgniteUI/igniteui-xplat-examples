//begin imports
import { IgcHierarchicalGridComponent, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRowEditEnter {
    //begin eventHandler
    public webHierarchicalGridRowEditEnter(args: CustomEvent<IgcGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }
    //end eventHandler
}