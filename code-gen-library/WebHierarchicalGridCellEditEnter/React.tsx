//begin imports
import { IgrHierarchicalGridComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridCellEditEnter {
    //begin eventHandler
    public webHierarchicalGridCellEditEnter(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }
    //end eventHandler
}