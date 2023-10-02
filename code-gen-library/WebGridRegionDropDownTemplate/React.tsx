//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo, IgrLinearProgress } from "igniteui-react";
//end imports

export class WebGridCountryDropDownTemplate {
    //begin template
    //begin content
    public webGridCountryDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
        <>
            <div style={{display: "flex", flex-direction: "column"}}>
                <IgrCombo placeholder="Choose Region..." disabled value-key="Region"  display-key="Region" single-select id="${comboId}">
                </IgrCombo>
                <IgrLinearProgress style={{display: "none"}} indeterminate id="${progressId}">
                </IgrLinearProgress>
            </div>
        </>
        );
    }
    //end content
    //end template
}

