//begin imports
import { IgrGridEditDoneEventArgs } from 'igniteui-react-grids';
//end imports

export class WebGridRowEditDone {
    //begin eventHandler
    public webGridRowEditDone(args: CustomEvent<IgrGridEditDoneEventArgs>): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEditDone'`;
        container.appendChild(message);
    }
    //end eventHandler
}