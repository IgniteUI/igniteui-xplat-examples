//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo } from "igniteui-react";
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
        this.comboRefs = this.comboRefs.bind(this);
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo ref={this.comboRefs} placeholder="Choose City..." disabled="true" valueKey="Name"  displayKey="Name" name={comboId} singleSelect="true">
                </IgrCombo>
            </div>
        </>
        );
    }
    //end content
    //end template
}

