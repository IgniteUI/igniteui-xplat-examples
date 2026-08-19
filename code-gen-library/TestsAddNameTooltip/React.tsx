//begin imports
import { IChartTooltipProps } from 'igniteui-react-core';
//end imports

export class TestsAddNameTooltip {
//begin template
//begin content
    public testsAddNameTooltip = (props: { dataContext: IChartTooltipProps }) => {
        return (
            <div className="ui-chart-default-tooltip-content">{(props.dataContext as any).item.Name}</div>
        );
    }
//end content
//end template
}
