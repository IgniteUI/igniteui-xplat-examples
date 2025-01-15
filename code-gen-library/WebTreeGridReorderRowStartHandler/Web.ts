//begin imports
import { IgcRowDragStartEventArgs, IgcTreeGrid } from 'igniteui-webcomponents-grids/grids';
//end imports

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