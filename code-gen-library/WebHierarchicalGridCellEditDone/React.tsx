//begin imports
import { IgrHierarchicalGridComponent, IgrGridEditDoneEventArgs} from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridCellEditDone {
    //begin eventHandler
    public webHierarchicalGridCellEditDone(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditDone'`;
        container.appendChild(message);
    }
    //end eventHandler
}