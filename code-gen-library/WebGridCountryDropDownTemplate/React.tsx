//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrCombo } from "igniteui-react";
//end imports

export class WebGridCountryDropDownTemplate {
    //begin template
    //begin content
    public webGridCountryDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        this.comboRefs = this.comboRefs.bind(this);
        const id = cell.id.rowID;
        const comboId = "country" + id;
        return (
        <>
            <IgrCombo data={this.countries} ref={this.comboRefs} change={(x: any, args: any) => { this.onCountryChange(id, x, args) }} placeholder="Choose Country..." valueKey="Country" displayKey="Country" singleSelect="true" name={comboId}></IgrCombo>
        </>
        );
    }
    //end content
    //end template
}

