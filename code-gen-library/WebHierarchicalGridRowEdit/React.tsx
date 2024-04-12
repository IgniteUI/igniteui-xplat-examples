//begin imports
import { IgrHierarchicalGridComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridRowEdit {
    //begin eventHandler
    public webHierarchicalGridRowEdit(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEdit'`;
        container.appendChild(message);
    }
    //end eventHandler
}