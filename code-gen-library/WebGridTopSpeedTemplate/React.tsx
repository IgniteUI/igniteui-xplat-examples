//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridTopSpeedTemplate {
    //begin template
    //begin content
    public IgrCellTemplateContext = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        if (cell.value < 5) {
        return (
            <>
                <div>
                    <span style="color: royalblue;">${cell.value}</span>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div>
                    <span>${cell.value}</span>
                </div>
            </>
        )
    }
    }
    //end content
    //end template
}
