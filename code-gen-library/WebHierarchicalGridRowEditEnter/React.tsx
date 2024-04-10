//begin imports
import { IgrHierarchicalGridComponent, IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridRowEditEnter {
    //begin eventHandler
    public webHierarchicalGridRowEditEnter(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }
    //end eventHandler
}