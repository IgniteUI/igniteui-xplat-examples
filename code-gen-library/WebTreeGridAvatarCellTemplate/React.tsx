//begin imports
import { IgrAvatar } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebTreeGridAvatarCellTemplate {
//begin template
//begin content
public webTreeGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
    return (
        <div className="cell__inner">
            <IgrAvatar shape='circle' src={props.dataContext.cell.row.data.Avatar}>
            </IgrAvatar>
            <span className="name">{props.dataContext.cell.value}</span>
        </div>
    );
}
//end content
//end template
public requiredStyles = `
<!--begin styles-->
.cell__inner {
    display: flex;
    align-items: center;
}

.name {
    margin-left: 30px;
}
<!--end styles-->
`;
}
