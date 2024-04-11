//begin imports
import { IgrRowIslandComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

export class WebRowIslandGridRowEdit {
    //begin eventHandler
    public webRowIslandGridRowEdit(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEdit'`;
        container.appendChild(message);
    }
    //end eventHandler
}