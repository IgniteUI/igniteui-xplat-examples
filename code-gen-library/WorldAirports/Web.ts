//begin imports
//end imports

import { WorldConnections } from './WorldFlights';

//begin data
/**
 * The cities the flights land at.
 *
 * Derived from the flights rather than listed, so a city no flight reaches is not an airport.
 */
export class WorldAirports extends Array<any> {

    public constructor() {
        super();
        var airports = WorldConnections.getAirports();
        for (var i = 0; i < airports.length; i++) {
            this.push(airports[i]);
        }
    }
}
//end data
