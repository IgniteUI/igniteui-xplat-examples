//begin imports
import { IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports
export class WebGridCellEditExit {
    //begin eventHandler
    public webGridCellEditExit(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEditExit'`;
        container.appendChild(message);
    }
    //end eventHandler
}
