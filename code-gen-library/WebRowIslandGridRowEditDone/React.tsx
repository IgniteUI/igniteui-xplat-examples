//begin imports
import { IgrRowIslandComponent, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports

export class WebRowIslandGridRowEditDone {
    //begin eventHandler
    public webRowIslandGridRowEditDone(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditDone'`;
        container.appendChild(message);
    }
    //end eventHandler
}