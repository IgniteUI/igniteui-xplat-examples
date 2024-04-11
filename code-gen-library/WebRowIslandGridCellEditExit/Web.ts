//begin imports
import { IgcRowIslandComponent, IgcGridEditDoneEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebRowIslandGridCellEditExit {
    //begin eventHandler
    public webRowIslandGridCellEditExit(args: CustomEvent<IgcGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEditExit'`;
        container.appendChild(message);
    }
    //end eventHandler
}
