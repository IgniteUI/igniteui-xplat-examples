//begin imports
import { IgrRowIslandComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebRowIslandGridRowEditEnter {
    //begin eventHandler
    public webRowIslandGridRowEditEnter(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }
    //end eventHandler
}