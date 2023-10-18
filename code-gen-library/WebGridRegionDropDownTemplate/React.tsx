//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo } from "igniteui-react";
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
        this.comboRefs = this.comboRefs.bind(this);
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo ref={this.comboRefs} change={(x: any, args: any) => { this.onRegionChange(id, x, args) }} placeholder="Choose Region..." disabled="true" valueKey="Region"  displayKey="Region" singleSelect="true" name={comboId}>
                </IgrCombo>
            </div>
        </>
        );
    }
    //end content
    //end template
}

