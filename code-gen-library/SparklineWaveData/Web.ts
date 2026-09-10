//begin imports
//end imports

//begin data
export class SparklineWaveItem {
    public Index: number;
    public Angle: number;
    public Value: number;
}

export class SparklineWaveData extends Array<SparklineWaveItem> {

    public constructor() {
        super();
        // Four turns of a wave, sampled every five degrees. A sparkline is a shape read at a
        // glance rather than a chart read point by point, so it wants a few hundred readings; the
        // second harmonic is what keeps the shape from being a plain sine, and the values cross
        // zero, which is what the win/loss display type needs to have anything to show.
        let index = 0;
        for (let angle = 0; angle < 360 * 4; angle += 5) {
            const fundamental = Math.sin(angle * Math.PI / 180);
            const harmonic = Math.sin(3 * angle * Math.PI / 180) / 3;
            const item = new SparklineWaveItem();
            item.Index = index++;
            item.Angle = angle;
            item.Value = fundamental + harmonic;
            this.push(item);
        }
    }
}
//end data
