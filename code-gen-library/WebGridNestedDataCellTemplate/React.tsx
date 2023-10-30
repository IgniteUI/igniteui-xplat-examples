//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrExpansionPanel, IgrInput } from 'igniteui-react';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridNestedDataCellTemplate {
    //begin template
    //begin content
    public webGridNestedDataCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value != null) {
            if (props.dataContext.cell.value.length === 0) return <></>;
            const value = props.dataContext.cell.value[0];
            var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
            return (
        <>
            <IgrExpansionPanel>
                <div slot="title" style={{fontSize: "1.1em", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.25rem"}}>
                {value.Name}
                </div>
                <div className="description">
                    <IgrInput type="text" label="Title" name="title" value={value.Title} change={(s:any, e: any) => {
                            props.dataContext.cell.value[0][s.label] = e.detail;
                            grid.markForCheck();
                        }} style={{textOverflow: "ellipsis"}} />
                    <IgrInput type="number" label="Age" name="title" value={value.Age} inputOcurred={(s:any, e: any) => {
                            props.dataContext.cell.value[0][s.label] = e.detail;
                            grid.markForCheck();
                        }} style={{textOverflow: "ellipsis"}} />
                </div>
            </IgrExpansionPanel>
        </>);
        }
        return <></>;
    };
    //end content
    //end template
}