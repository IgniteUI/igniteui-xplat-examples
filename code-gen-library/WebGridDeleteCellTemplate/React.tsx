//begin imports
import { IgrCellTemplateContext, IgrGridComponent } from 'igniteui-react-grids';
import { IgrButtonComponent } from 'igniteui-react';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridDeleteCellTemplate {
//begin template
//begin content
    public webGridDeleteCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        var grid = CodeGenHelper.getDescription<IgrGridComponent>("content");
        const id = e.dataContext.cell.id.rowID;
        return<><div onClick={(e: any) => grid.deleteRow(id)}><IgrButton><span key="btnText">Delete</span></IgrButton></div></>;
    }
//end content
//end template
}