//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo } from "igniteui-react";
//end imports

export class WebGridRegionDropDownTemplate {
    //begin template
    //begin content
    public webGridRegionDropDownTemplate = (ctx: IgrCellTemplateContext) => {
        const rowId = ctx.cell?.id.rowID;
        if (!rowId) return <></>;
        const comboId = `region_${rowId}`;

        return (
            <>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <IgrCombo
                        ref={this.getComboRef(comboId)}
                        onChange={(args: any) => { (this as any).onRegionChange(rowId, args) }}
                        placeholder="Choose Region..."
                        disabled={true}
                        valueKey="Region"
                        displayKey="Region"
                        singleSelect={true}
                        name={comboId}>
                    </IgrCombo>
                </div>
            </>
        );
    }
    //end content
    //end template
}

