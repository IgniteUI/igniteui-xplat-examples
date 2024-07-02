//begin imports
import { IgrGridEditEventArgs, IgrGrid } from 'igniteui-react-grids';
//end imports

export class WebGridCellEdit {
    //begin eventHandler
    public webGridCellEdit(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }
    //end eventHandler
}