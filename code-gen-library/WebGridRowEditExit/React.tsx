//begin imports
import { IgrGridEditDoneEventArgs, IgrGrid } from 'igniteui-react-grids';
//end imports

export class WebGridRowEditExit {
    //begin eventHandler
    public webGridRowEditExit(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }
    //end eventHandler
}