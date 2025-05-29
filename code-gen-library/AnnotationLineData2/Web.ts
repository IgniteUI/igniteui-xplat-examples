//begin imports
//end imports

//begin data
export class AnnotationLineDataItem {
    public constructor(init: Partial<AnnotationLineDataItem>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationLineData2 extends Array<AnnotationLineDataItem> {
    public constructor(items: Array<AnnotationLineDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationLineDataItem(
                {
                    startX: 48,
                    startY: 25,
                    endX: 105,
                    endY: 250,
                    label: `Growth &\nSupport`
                }),
                new AnnotationLineDataItem(
                {
                    startX: 108,
                    startY: 440,
                    endX: 155,
                    endY: 210,
                    label: `Decline &\nResistance`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
//end data