//begin imports
import { IgrRowIslandComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

export class WebRowIslandGridCellEdit {
    //begin eventHandler
    public webRowIslandGridCellEdit(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }
    //end eventHandler
}