//begin imports
import { IgrRowDragStartEventArgs, IgrTreeGrid } from 'igniteui-react-grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebTreeGridReorderRowStartHandler {
    //begin eventHandler
    public webTreeGridReorderRowStartHandler(args: CustomEvent<IgcRowDragStartEventArgs>){
        const draggedRow = args.detail.dragData;
        if(draggedRow.expanded){
            draggedRow.expanded = false;   
        }
    }
    //end eventHandler
}