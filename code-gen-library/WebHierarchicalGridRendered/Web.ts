//begin imports
import { IgcRowSelectionEventArgs } from 'igniteui-webcomponents-grids/grids';
import { IgcHierarchicalGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebHierarchicalGridRendered {
    //begin eventHandler
    public webHierarchicalGridRendered(args:any): void {
        const hierarchicalGrid = document.getElementById("hierarchicalGrid");
        hierarchicalGrid.parentElement.style.display = "flex";
        const container = document.createElement("div");
        container.id = "container";
        container.style.height = "80vh";
        container.style.width = "100%";
        container.style.overflow = "auto";
        hierarchicalGrid.parentElement.appendChild(container);
        const title = document.createElement("span");
        title.textContent = "Events execution sequence:";
        container.appendChild(title);
    }
    //end eventHandler
}