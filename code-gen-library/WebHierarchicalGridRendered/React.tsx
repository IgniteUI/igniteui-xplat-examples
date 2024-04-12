//begin imports
import { IgrRowSelectionEventArgs } from 'igniteui-react-grids';
import { IgrHierarchicalGridComponent } from 'igniteui-react-grids';
//end imports

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