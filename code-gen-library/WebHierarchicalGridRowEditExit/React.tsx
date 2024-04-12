//begin imports
import { IgrHierarchicalGridComponent, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRowEditExit {
    //begin eventHandler
    public webHierarchicalGridRowEditExit(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }
    //end eventHandler
}