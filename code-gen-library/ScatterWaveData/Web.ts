//begin imports
//end imports

//begin data
export class ScatterWaveItem {
    public X: number;
    public SinValue: number;
    public CosValue: number;
}

export class ScatterWaveData extends Array<ScatterWaveItem> {

    public constructor() {
        super();
        // Two full turns either side of zero, every ten degrees: a pair of curves that cross the
        // origin in both directions, which is what a sample about where the axes cross needs.
        for (let degrees = -360; degrees <= 360; degrees += 10) {
            const radians = (degrees * Math.PI) / 180;
            const item = new ScatterWaveItem();
            item.X = degrees;
            item.SinValue = Math.sin(radians);
            item.CosValue = Math.cos(radians);
            this.push(item);
        }
    }
}
//end data
