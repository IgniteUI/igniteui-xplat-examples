//begin imports
import { IgcRowIslandComponent, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebRowIslandGridRowEdit {
    //begin eventHandler
    public webRowIslandGridRowEdit(args: CustomEvent<IgcGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEdit'`;
        container.appendChild(message);
    }
    //end eventHandler
}