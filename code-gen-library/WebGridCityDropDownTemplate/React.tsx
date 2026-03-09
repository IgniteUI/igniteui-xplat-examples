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
        (this as any).comboRefs = (this as any).comboRefs.bind(this);
        const existingCombo = this.comboRefCollection.find(c => c.name === comboId);
        const cityData = existingCombo?.data || [];
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo ref={(this as any).comboRefs} placeholder="Choose City..." disabled={cityData.length === 0} valueKey="Name"  displayKey="Name" name={comboId} singleSelect={true}>
                </IgrCombo>
            </div>
        </>
        );
    }
    //end content
    //end template
}

