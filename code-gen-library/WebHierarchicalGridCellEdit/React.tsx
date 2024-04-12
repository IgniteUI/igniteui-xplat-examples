//begin imports
import { IgrHierarchicalGridComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridCellEdit {
    //begin eventHandler
    public webHierarchicalGridCellEdit(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }
    //end eventHandler
}