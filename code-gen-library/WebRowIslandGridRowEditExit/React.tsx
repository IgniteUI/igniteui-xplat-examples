//begin imports
import { IgrRowIslandComponent, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports

export class WebRowIslandGridRowEditExit {
    //begin eventHandler
    public webRowIslandGridRowEditExit(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }
    //end eventHandler
}