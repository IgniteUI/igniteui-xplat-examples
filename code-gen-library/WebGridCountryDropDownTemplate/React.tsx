//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo } from "igniteui-react";
//end imports

export class WebGridCountryDropDownTemplate {
    //begin template
    //begin content
    public IgrCellTemplateContext = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
        <>
            <IgrCombo placeholder="Choose Country..." value-key="Country" display-key="Country" single-select id="${comboId}"></IgrCombo>
        </>
        );
    }
    //end content
    //end template
}

