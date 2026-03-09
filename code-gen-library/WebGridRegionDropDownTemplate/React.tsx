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
        (this as any).comboRefs = (this as any).comboRefs.bind(this);
        const existingCombo = this.comboRefCollection.find(c => c.name === comboId);
        const regionData = existingCombo?.data || [];
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo ref={(this as any).comboRefs} data={regionData} disabled={regionData.length === 0} onChange={(args: any) => { (this as any).onRegionChange(id, args) }} placeholder="Choose Region..." valueKey="Region"  displayKey="Region" singleSelect={true} name={comboId}>
                </IgrCombo>
            </div>
        </>
        );
    }
    //end content
    //end template
}

