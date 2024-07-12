//begin imports
import { IgrCellTemplateContext, IgrHierarchicalGrid } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';
//end imports

export class HGridCellEditCellTemplate {
//begin template
//begin content
public hGridCellEditCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    const cell = e.dataContext.cell;
    const colIndex = cell.id.columnID;
    let hierarchicalGrid1 = CodeGenHelper.getDescription<IgrHierarchicalGrid>("content");
    const field: string = hierarchicalGrid1.getColumnByVisibleIndex(colIndex).field;
    const key = field + "_" + cell.id.rowID;
    let index = 0;
    let hGridDndData = hierarchicalGrid1.data;
    for(const i of (hGridDndData as any)){
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
    return <><IgrSelect key={key} change={(x: any) => {
            setTimeout(() => {
                cell.editValue = x.value;
            });
        }}>
       {cellValues}
    </IgrSelect>
    </>;
}
//end content
//end template
}

