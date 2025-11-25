//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo } from "igniteui-react";
//end imports

export class WebGridCountryDropDownTemplate {
    //begin template
    //begin content
    public webGridCountryDropDownTemplate = (ctx: IgrCellTemplateContext) => {
        const rowId = ctx.cell?.id.rowID;
        if (!rowId) return <></>;
        const comboId = `country_${rowId}`;

        return (
            <>
                <IgrCombo
                    data={CodeGenHelper.findByName<any[]>("countries")}
                    ref={this.getComboRef(comboId)}
                    onChange={(event: CustomEvent) => { (this as any).onCountryChange(rowId, event) }}
                    placeholder="Choose Country..."
                    valueKey="Country"
                    displayKey="Country"
                    singleSelect={true}
                    name={comboId}>
                </IgrCombo>
            </>
        );
    }
    //end content
    //end template
}

