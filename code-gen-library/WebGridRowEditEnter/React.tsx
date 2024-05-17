//begin imports
import { IgrGridEditEventArgs } from 'igniteui-react-grids';
//end imports

export class WebGridRowEditEnter {
    //begin eventHandler
    public webGridRowEditEnter(args: CustomEvent<IgrGridEditEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }
    //end eventHandler
}