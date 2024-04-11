//begin imports
import { IgrGridComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridRowEdit {
    //begin eventHandler
    public webGridRowEdit(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEdit'`;
        container.appendChild(message);
    }
    //end eventHandler
}