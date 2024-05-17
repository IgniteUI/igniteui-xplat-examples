//begin imports
import { IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

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