//begin imports
import { IgrGridComponent, IgrGridEditDoneEventArgs} from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridCellEditDone {
    //begin eventHandler
    public webGridCellEditDone(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEditDone'`;
        container.appendChild(message);
    }
    //end eventHandler
}