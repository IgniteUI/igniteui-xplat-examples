//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo } from "igniteui-react";
//end imports

export class WebGridCityDropDownTemplate {
    //begin template
    //begin content
    public webGridCityDropDownTemplate = (ctx: IgrCellTemplateContext) => {
        const rowId = ctx.cell?.id.rowID;
        if (!rowId) return <></>;
        const comboId = `city_${rowId}`;

        return (
            <>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <IgrCombo
                        ref={this.getComboRef(comboId)}
                        placeholder="Choose City..." disabled={true}
                        valueKey="Name" displayKey="Name"
                        name={comboId}
                        singleSelect={true}>
                    </IgrCombo>
                </div>
            </>
        );
    }
    //end content
    //end template
}

