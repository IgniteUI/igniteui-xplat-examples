//begin imports
import { IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

export class HGridEditingEvents {
    //begin eventHandler
    public hGridEditingEvents(event: CustomEvent<IgcGridEditEventArgs>): void {
        const today = new Date();
        const column = event.column;
        if (column.field === 'Debut') {
            if (event.newValue > today.getFullYear()) {
                alert('The debut year must be in the past!');
                event.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (event.newValue > new Date()) {
                alert('The debut year must be in the past!');
                event.cancel = true;
            }
        }
    }
    //end eventHandler
}