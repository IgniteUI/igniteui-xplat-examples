//begin imports
import { IgrGridEditEventArgs, IgrGrid } from 'igniteui-react-grids';
//end imports

export class WebGridCellEditEnter {
    //begin eventHandler
    public webGridCellEditEnter(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }
    //end eventHandler
}