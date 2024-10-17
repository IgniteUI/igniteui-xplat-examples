//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrInput } from 'igniteui-react';
//end imports

export class WebGridNumericColEditCellTemplate {
    //begin template
    //begin content
    public webGridNumericColEditCellTemplate = (e: { dataContext: IgrCellTemplateContext }) => {

        const cell = e.dataContext.cell;

        return (
            <IgrInput 
                type="number" 
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

