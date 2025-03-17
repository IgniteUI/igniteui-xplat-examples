//begin imports
import { IgrGridBaseDirective, IgrGridEditEventArgs } from 'igniteui-react-grids';

//end imports

export class WebGridOnEditEnter {
    //begin eventHandler
    public webGridOnEditEnter(s: IgrGridBaseDirective, e: IgrGridEditEventArgs): void {
        console.log('onEditEnter');
        console.log('event', e);
        console.log('event.detail', e.detail);
        // console.log('event.i', e.i);
        // console.log('event.nativeElement', e.nativeElement);
        console.log('event.detail.cellID', e.detail.cellID.columnID);
        const column = s.getColumnByVisibleIndex(e.detail.cellID.columnID);
        if(column.field === 'ReorderLevel') {
            console.log('==> ReorderLevel Col');
            const rowIndex = e.detail.cellID.rowIndex;
            console.log('**********Row ID***********', rowIndex);
            // e.detail.cellID.
            
            console.log('SOMETHING', e.detail.nativeElement);
            console.log('NATIVE EL', (e.detail.nativeElement as any).cellID);
            // (e.detail.nativeElement as any).event.focus();
            
            setTimeout(() => {
                const x = document.getElementById('mimi1');
                console.log('XXXXXXXXXXX', x);
                x?.focus();
            });
        }
    }
    //end eventHandler
}