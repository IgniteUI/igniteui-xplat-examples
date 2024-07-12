//begin imports
import { IgrGridEditDoneEventArgs, IgrGrid } from 'igniteui-react-grids';
//end imports

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