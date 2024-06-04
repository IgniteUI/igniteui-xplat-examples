//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';
//end imports

export class WebGridCellEditCellTemplate {
//begin template
//begin content
public webGridCellEditCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
    let cellValues: any = [];
    let uniqueValues: any = [];
    const cell = e.dataContext.cell;
    const colIndex = cell.id.columnID;
    const field: string = this.grid1.getColumnByVisibleIndex(colIndex).field;
    const key = field + "_" + cell.id.rowID;
    let index = 0;
    for(const i of (this.roleplayDataStats as any)){
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

