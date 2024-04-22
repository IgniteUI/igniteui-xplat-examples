//begin imports
import { IgrRowSelectionEventArgs } from 'igniteui-react-grids';
import { IgrGridComponent } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridRendered {
    //begin eventHandler
    public webGridRendered(args:any): void {
        const grid = document.getElementById("grid");
        grid.parentElement.className = "fill";
        grid.parentElement.style.display = "flex";
        grid.parentElement.style.height = "100vh";
        const container = document.createElement("div");
        container.id = "container";
        container.style.height = "100vh";
        container.style.width = "100%";
        container.style.overflow = "auto";
        grid.parentElement.appendChild(container);
        const title = document.createElement("span");
        title.textContent = "Events execution sequence:";
        container.appendChild(title);
    }
    //end eventHandler
}