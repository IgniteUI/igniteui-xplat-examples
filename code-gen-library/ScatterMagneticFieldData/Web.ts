//begin imports
//end imports

//begin data
export class ScatterMagneticFieldItem {
    public X: number;
    public Y: number;
    public Z: number;
    public Index: number;
}

export class ScatterMagneticFieldData extends Array<ScatterMagneticFieldItem> {

    public constructor() {
        super();
        // An eleven by eleven grid of readings laid over the whole globe, so the longitude and
        // latitude a scatter area or contour series draws against are the grid's own axes.
        const xMin = -180;
        const xMax = 180;
        const yMin = -90;
        const yMax = 90;
        const xCount = 11;
        const yCount = 11;

        const xStep = (xMax - xMin) / (xCount - 1);
        const yStep = (yMax - yMin) / (yCount - 1);
        let index = 0;
        for (let x = xMin; x <= xMax; x += xStep) {
            for (let y = yMin; y <= yMax; y += yStep) {
                const item = new ScatterMagneticFieldItem();
                item.X = x;
                item.Y = y;
                // The value at each intersection: two cosines, one per axis, which gives the
                // banded field the color scale is there to show.
                item.Z = Math.cos(x) + Math.cos(y);
                item.Index = index++;
                this.push(item);
            }
        }
    }
}
//end data
