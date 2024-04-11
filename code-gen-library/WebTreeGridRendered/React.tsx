//begin imports
import { IgrRowSelectionEventArgs } from 'igniteui-webcomponents-grids/grids';
import { IgrTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridRendered {
    //begin eventHandler
    public webTreeGridRendered(args:any): void {
        const treeGrid = document.getElementById("grid");
        treeGrid.parentElement.className = "fill";
        treeGrid.parentElement.style.display = "flex";
        treeGrid.parentElement.style.height = "100vh";
        const container = document.createElement("div");
        container.id = "container";
        container.style.height = "100vh";
        container.style.width = "100%";
        container.style.overflow = "auto";
        treeGrid.parentElement.appendChild(container);
        const title = document.createElement("span");
        title.textContent = "Events execution sequence:";
        container.appendChild(title);
    }
    //end eventHandler
}