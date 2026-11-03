//begin imports
//end imports

//begin data
import { WorldConnections } from './WorldFlights';
/** Meridians and parallels every thirty degrees, as polylines. */
export class WorldGridlines extends Array<any> {

    public constructor() {
        super();
        var gridlines = WorldConnections.getGridlines();
        for (var i = 0; i < gridlines.length; i++) {
            this.push(gridlines[i]);
        }
    }
}
//end data
