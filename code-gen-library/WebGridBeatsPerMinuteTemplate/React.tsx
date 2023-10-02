//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridBeatsPerMinuteTemplate {
    //begin template
    //begin content
    public webGridBeatsPerMinuteTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        if (cell.value > 95) {
        return (
            <>
                <div>
                    <span style={{color: 'red'}}>${cell.value}</span>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div>
                    <span style={{color: 'green'}}>${cell.value}</span>
                </div>`;
            </>
        )
    }
    }
    //end content
    //end template
}
