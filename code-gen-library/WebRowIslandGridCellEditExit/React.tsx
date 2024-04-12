//begin imports
import { IgrRowIslandComponent, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports

export class WebRowIslandGridCellEditExit {
    //begin eventHandler
    public webRowIslandGridCellEditExit(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEditExit'`;
        container.appendChild(message);
    }
    //end eventHandler
}
