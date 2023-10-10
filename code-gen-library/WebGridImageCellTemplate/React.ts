//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridImageCellTemplate {
//begin template
//begin content
public webGridImageCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
    return (
        <div>
            <img src={props.dataContext.cell.value}
             style={{
                 border: '1px solid black',
                 objectFit: 'fill',
                 height: '2rem',
                 width: '3rem'
             }} />
        </div>
    );
}
//end content
//end template
}