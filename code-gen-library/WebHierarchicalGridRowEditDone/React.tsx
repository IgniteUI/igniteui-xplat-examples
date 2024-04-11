//begin imports
import { IgrHierarchicalGridComponent, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridRowEditDone {
    //begin eventHandler
    public webHierarchicalGridRowEditDone(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditDone'`;
        container.appendChild(message);
    }
    //end eventHandler
}