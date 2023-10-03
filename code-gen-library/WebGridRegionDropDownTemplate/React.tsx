//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo, IgrLinearProgress } from "igniteui-react";
//end imports

export class WebGridRegionDropDownTemplate {
    //begin template
    //begin content
    public webGridRegionDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        const id = cell.id.rowID;
        const comboId = "region_" + id;
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo placeholder="Choose Region..." disabled="true" valueKey="Region"  displayKey="Region" singleSelect="true" id={comboId}>
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

