//begin imports
import { IgcGridEditEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

export class HGridEditingEvents {
    //begin eventHandler
    public hGridEditingEvents(event: CustomEvent<IgcGridEditEventArgs>): void {
        const today = new Date();
        const column = event.detail.column;
        if (column.field === 'Debut') {
            if (event.detail.newValue > today.getFullYear()) {
                alert('The debut year must be in the past!');
                event.detail.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (event.detail.newValue > new Date()) {
                alert('The debut year must be in the past!');
                event.detail.cancel = true;
            }
        }
    }
    //end eventHandler
}