//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrExpansionPanel } from 'igniteui-react';
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
                    <div style={{display: "flex", alignItems: "center"}}>
                        <label htmlFor="title" style={{width: "2rem", margin: "0rem"}}>Title</label>
                        <input id='Title' type="text" name="title" value={value.Title} onChange={(e: any) => {
                             props.dataContext.cell.value[0][e.target.id] = e.target.value;
                             grid.markForCheck();
                            }} style={{textOverflow: "ellipsis"}} />
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <label htmlFor="age" style={{width: "2rem", margin: "0rem"}}>Age</label>
                        <input id='Age' type="number" name="title" value={value.Age} onChange={(e: any) => {
                                props.dataContext.cell.value[0][e.target.id] = e.target.value;
                                grid.markForCheck();
                            }} style={{textOverflow: "ellipsis"}} />
                    </div>
                </div>
            </IgrExpansionPanel>
        </>);
        }
        return <></>;
    };
    //end content
    //end template
}