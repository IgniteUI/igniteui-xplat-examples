//begin imports
import { IgcGridComponent, IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridRowEditEnter {
    //begin eventHandler
    public webGridRowEditEnter(args: CustomEvent<IgcGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }
    //end eventHandler
}