//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrLinearProgress } from 'igniteui-react';
//end imports

export class WebGridProgressCellTemplate {
//begin template
//begin content
public webGridProgressCellTemplate = (e: { dataContext: IgrCellTemplateContext }) => {
    const value = e.dataContext.cell.value;
    return (
        <div style={{width: '4rem'}}>
            <IgrLinearProgress value={value}></IgrLinearProgress>
        </div>
    );
};
//end content
//end template
}