//begin imports
//end imports

//begin async data
// The outline of the aircraft, as one polygon: a list of rings, each a list of points, which is what
// a shape series reads through its shape member path.
//
// Fetched rather than written out. The shape is a few thousand points and the seating plan beside it
// is a few hundred times that; both are published as JSON, and a sample about drawing shapes is
// better for having the real outline than a simplified one that would fit in a file here.
export class AirplaneShapeItem {
    public points: any[][];
}

export class AirplaneShape extends Array<AirplaneShapeItem> {

    public static async fetch(): Promise<AirplaneShape> {
        const url = "https://static.infragistics.com/xplatform/json/airplane-shape.json";
        const response = await fetch(url);
        const jsonData = await response.json();
        return new Promise<AirplaneShape>((resolve, reject) => {
            resolve(jsonData);
        });
    }
}
//end async data
