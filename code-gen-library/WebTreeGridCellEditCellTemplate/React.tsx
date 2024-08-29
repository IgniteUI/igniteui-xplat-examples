//begin imports
import { IgrCellTemplateContext, IgrTreeGrid } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';
//end imports

export class WebTreeGridCellEditCellTemplate {
//begin template
//begin content
public webTreeGridCellEditCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    const cell = e.dataContext.cell;
    const colIndex = cell.id.columnID;
    var treeGrid1 = CodeGenHelper.getDescription<IgrTreeGrid>("content");
    const field: string = treeGrid1.getColumnByVisibleIndex(colIndex).field;
    let roleplayTreeGridData = treeGrid1.data;
    const key = field + "_" + cell.id.rowID;
    let index = 0;
    for(const i of (roleplayTreeGridData as any)){
        if(uniqueValues.indexOf(i[field]) === -1 )
        {
            cellValues.push(<><IgrSelectItem selected={e.dataContext.cell.value == i[field]}
             value={i[field]} key={key + "_" + index}>
                <div key={key + "_" + index}>{i[field]}</div>
        </IgrSelectItem></>);
            uniqueValues.push(i[field]);
            
        }
        index++;
    }
    return (
        <IgrSelect className="size-large" key={key} change={(x: any) => {
                setTimeout(() => {
                    cell.editValue = x.value;
                });
            }}>
            {cellValues}
        </IgrSelect>
    );
}
//end content
public requiredStyles = `
<!--begin styles-->
.size-large {
    --ig-size: var(--ig-size-large);
}
<!--end styles-->
`;
//end template
}

