//begin imports
import { IgcGridComponent, IgcGridEditDoneEventArgs} from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridCellEditDone {
    //begin eventHandler
    public webGridCellEditDone(args: CustomEvent<IgcGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEditDone'`;
        container.appendChild(message);
    }
    //end eventHandler
}