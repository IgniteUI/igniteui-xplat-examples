//begin imports
import { IgcRowIslandComponent, IgcGridEditDoneEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebRowIslandGridRowEditDone {
    //begin eventHandler
    public webRowIslandGridRowEditDone(args: CustomEvent<IgcGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditDone'`;
        container.appendChild(message);
    }
    //end eventHandler
}