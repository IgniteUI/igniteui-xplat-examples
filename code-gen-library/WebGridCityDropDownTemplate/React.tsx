//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo, IgrLinearProgress } from "igniteui-react";
//end imports

export class WebGridCityDropDownTemplate {
    //begin template
    //begin content
    public webGridCityDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        const id = cell.id.rowID;
        const comboId = "city_" + id;
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo placeholder="Choose City..." disabled="true" valueKey="Name"  displayKey="Name" id={comboId} singleSelect="true">
                </IgrCombo>
                <IgrLinearProgress style={{display: "none"}} indeterminate>
                </IgrLinearProgress>
            </div>
        </>
        );
    }
    //end content
    //end template
}

