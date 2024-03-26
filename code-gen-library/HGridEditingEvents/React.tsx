//begin imports
import { IgrColumnTemplateContext} from 'igniteui-react-grids';
//end imports

export class HGridEditingEvents {
//begin template
//begin content
public hGridEditingEvents = (props: {dataContext: IgrColumnTemplateContext}) => {
    const today = new Date();
        const column = props.column;
        if (column.field === 'Debut') {
            if (props.newValue > today.getFullYear()) {
                alert('The debut year must be in the past!');
                props.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (props.newValue > new Date()) {
                alert('The debut year must be in the past!');
                props.cancel = true;
            }
        }
}
//end content
//end template
}
