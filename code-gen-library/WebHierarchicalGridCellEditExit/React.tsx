//begin imports
import { IgrHierarchicalGridComponent, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridCellEditExit {
    //begin eventHandler
    public webHierarchicalGridCellEditExit(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditExit'`;
        container.appendChild(message);
    }
    //end eventHandler
}
