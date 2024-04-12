//begin imports
import { IgrRowIslandComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

export class WebRowIslandGridCellEditEnter {
    //begin eventHandler
    public webRowIslandGridCellEditEnter(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }
    //end eventHandler
}