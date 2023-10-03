//begin imports
//end imports

//begin data
export class ScatterHighDensityItem {
    public X: number;
    public Y: number;
}

export class ScatterHighDensityData extends Array<ScatterHighDensityItem> {

    public constructor() {
        super();
        var amount = 25000;
        this.generate(amount / 2, 0, 0, 75000, 20000);
        this.generate(amount / 4, 0, 0, 100000, 25000);
        this.generate(amount / 8, 0, 0, 150000, 30000);
        this.generate(amount / 8, 0, 0, 200000, 75000);
    }

    public generate(count: number,
        centerX: number, centerY: number,
        spreadX: number, spreadY: number) {

        for (let i = 0; i <= count; i++)
        {
            let rangeX = Math.random() * spreadX;
            let rangeY = Math.random() * spreadY;
            const flip = 1;
            const prop = Math.random();
            if (prop < .25) {
                rangeX *= flip;
                rangeY *= flip;
            }
            else if (prop >= .25 && prop < .5) {
                rangeX *= -flip;
                rangeY *= flip;
            }
            else if (prop >= .5 && prop < .75) {
                rangeX *= flip;
                rangeY *= -flip;
            }
            else {
                rangeX *= -flip;
                rangeY *= -flip;
            }
            const dispersionX = Math.random() + 0.12;
            const dispersionY = Math.random() + 0.12;
            var item = new ScatterHighDensityItem();
            item.X = Math.round(centerX + (rangeX * dispersionX));
            item.Y = Math.round(centerY + (rangeY * dispersionY));
            this.push(item);
        }
    }
}
//end data