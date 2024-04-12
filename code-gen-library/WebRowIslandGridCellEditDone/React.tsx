//begin imports
import { IgrRowIslandComponent, IgrGridEditDoneEventArgs} from 'igniteui-react-grids';
//end imports

export class WebRowIslandGridCellEditDone {
    //begin eventHandler
    public webRowIslandGridCellEditDone(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEditDone'`;
        container.appendChild(message);
    }
    //end eventHandler
}