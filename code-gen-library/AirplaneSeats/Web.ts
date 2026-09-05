//begin imports
//end imports

//begin async data
// Every seat on the aircraft: its polygon, and what the sample colours it by -- which cabin class it
// belongs to and whether it is sold.
//
// Fetched rather than written out. There are 232 seats and a few hundred points to each, and the
// point of a seating plan is that it is the whole plan; the JSON is published, so it is read from
// there.
export class AirplaneSeatsItem {
    public seat: string;
    public price: string;
    public class: string;
    public status: string;
    public row: string;
    public column: string;
    public points: any[][];
}

export class AirplaneSeats extends Array<AirplaneSeatsItem> {

    public static async fetch(): Promise<AirplaneSeats> {
        const url = "https://static.infragistics.com/xplatform/json/airplane-seats.json";
        const response = await fetch(url);
        const jsonData = await response.json();
        return new Promise<AirplaneSeats>((resolve, reject) => {
            resolve(jsonData);
        });
    }
}
//end async data
