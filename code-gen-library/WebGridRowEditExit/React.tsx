//begin imports
import { IgrGridComponent, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridRowEditExit {
    //begin eventHandler
    public webGridRowEditExit(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }
    //end eventHandler
}