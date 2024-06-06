//begin imports
import { IgcTreeGridComponent, IgcRowDragStartEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridReorderRowStartHandler {
    //begin eventHandler
    public webTreeGridReorderRowStartHandler(args: CustomEvent<IgcRowDragStartEventArgs>){
        const draggedRow = args.detail.dragElement;
        const grid = CodeGenHelper.getDescription<IgcTreeGridComponent>("content");        
        const row = grid.getRowByIndex(draggedRow.getAttribute('data-rowindex'));        
        if(row.expanded){
            row.expanded = false;   
        }
    }    
    //end eventHandler
}