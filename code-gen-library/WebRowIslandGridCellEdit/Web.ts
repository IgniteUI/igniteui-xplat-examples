//begin imports
import { IgcRowIslandComponent, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebRowIslandGridCellEdit {
    //begin eventHandler
    public webRowIslandGridCellEdit(args: CustomEvent<IgcGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }
    //end eventHandler
}