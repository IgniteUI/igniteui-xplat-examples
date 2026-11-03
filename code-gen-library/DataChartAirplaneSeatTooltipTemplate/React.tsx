//begin imports
//end imports

export class DataChartAirplaneSeatTooltipTemplate {
//begin template
//begin content
    public dataChartAirplaneSeatTooltipTemplate = (props: { dataContext: any }) => {
        const item = props.dataContext.item;
        if (item == null) {
            return <div />;
        }
        // A seat is identified by where it is and what it costs, and the two things the plan is
        // coloured by -- its cabin class and whether it is sold -- are named here as well, so the
        // colour under the pointer can be read rather than guessed at from the legend.
        return (
            <div className="ui-tooltip-content">
                <div>Class: {item.class}</div>
                <div>Seat: {item.seat}</div>
                <div>Price: ${item.price}</div>
                <div>Status: {item.status}</div>
            </div>
        );
    }
//end content
//end template
}
