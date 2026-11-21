//begin imports
import { IIgrCellTemplateProps, IgrTemplateCellInfo, IgrDataGrid } from 'igniteui-react-data-grids';
//end imports

import { CodeGenHelper } from 'igniteui-react-core';

export class DataGridDeleteRowButtonTemplate {
    //begin template
    //begin content
    public dataGridDeleteRowButtonTemplate = (props: IIgrCellTemplateProps) => {
        const cell = props.dataContext as IgrTemplateCellInfo;
        return <button type="button" disabled={cell.isDeleted} onClick={() => {
            const grid = CodeGenHelper.getDescription<IgrDataGrid>('content');
            grid.removeItem(cell.rowItem);
        }}>Delete</button>;
    }
    //end content
    //end template
}
