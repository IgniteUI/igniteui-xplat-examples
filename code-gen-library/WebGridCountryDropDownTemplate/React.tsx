//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo } from "igniteui-react";
//end imports

export class WebGridCountryDropDownTemplate {
    //begin template
    //begin content
    public webGridCountryDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }

        return (
        <>
            <IgrCombo placeholder="Choose Country..." valueKey="Country" displayKey="Country" singleSelect="true" id="${comboId}"></IgrCombo>
        </>
        );
    }
    //end content
    //end template
}

