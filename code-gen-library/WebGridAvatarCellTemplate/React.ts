//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridAvatarCellTemplate {
//begin template
//begin content
public webGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
    return (
        <div>
            <IgrAvatar shape='circle' src={props.dataContext.cell.value}>
            </IgrAvatar>
        </div>
    );
}
//end content
//end template
}

