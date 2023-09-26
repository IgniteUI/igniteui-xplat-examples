//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrExpansionPanel } from 'igniteui-react';
//end imports

export class WebGridNestedDataCellTemplate {
    //begin template
    //begin content
    public webGridNestedDataCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value != null) {
            if (props.dataContext.cell.value.length === 0) return <></>;
            return (
        <>
            <IgrExpansionPanel>
                <div slot="title" style={{fontSize: "1.1em", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.25rem"}}>
                {props.dataContext.cell.value[0].Name}
                </div>
                <div className="description">
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div for="title" style={{width: "2rem", margin: "0rem"}}>Title</div>
                        <input id='Title' type="text" name="title" value={props.dataContext.cell.value[0].Title} style={{textOverflow: "ellipsis"}} />
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div for="age" style={{width: "2rem", margin: "0rem"}}>Age</div>
                        <input id='Age' type="text" name="title" value={props.dataContext.cell.value[0].Age} style={{textOverflow: "ellipsis"}} />
                    </div>
                </div>
            </IgrExpansionPanel>
        </>);
        }
    };
    //end content
    //end template
}