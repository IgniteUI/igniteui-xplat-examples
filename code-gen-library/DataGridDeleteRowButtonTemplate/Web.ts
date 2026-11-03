//begin imports
import { IgcDataGridComponent } from 'igniteui-webcomponents-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridDeleteRowButtonTemplate {
    //begin eventHandler
    public dataGridDeleteRowButtonTemplate(s: any, args: any): void {
        const content = args.content as HTMLDivElement;
        if (content.childElementCount === 0) {
            const button = document.createElement("button") as HTMLButtonElement;
            button.innerText = "Delete";
            button.onclick = (event: MouseEvent) => {
                const grid = CodeGenHelper.getDescription<IgcDataGridComponent>("content");
                const btn = event.currentTarget as HTMLButtonElement;
                const viewIndex = parseInt(btn.id);
                const rowItem = grid.actualDataSource.getItemAtIndex(viewIndex);
                grid.removeItem(rowItem);
            };
            content.appendChild(button);
        }

        const button = content.children[0] as HTMLButtonElement;
        button.disabled = args.cellInfo.isDeleted;
        button.id = args.cellInfo.dataRow.toString();
    }
    //end eventHandler
}
