//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrInput } from 'igniteui-react';
//end imports

export class WebGridNumericColEditCellTemplate {
    //begin template
    //begin content
    public webGridNumericColEditCellTemplate = (e: { dataContext: IgrCellTemplateContext }) => {

        const cell = e.dataContext.cell;
        const rowId = cell.id.rowID;
        const columnId = cell.id.columnID;
        const inputTemplateId = `edit-cell-${rowId}-${columnId}`;

        return (
            <IgrInput 
                type="number"
                id={inputTemplateId} 
                name={cell.id.rowID} 
                value={cell.editValue} 
                inputOcurred={(s:any, e: any) => {
                    cell.editValue = e.detail;
                }} 
                style={{width: "100%"}}
            />
        );
    }
    //end content
    //end template
}