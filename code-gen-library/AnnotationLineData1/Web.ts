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
export class AnnotationLineData1 extends Array<AnnotationLineDataItem> {
    public constructor(items: Array<AnnotationLineDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationLineDataItem(
                {
                    startX: 190,
                    startY: 138,
                    endX: 230,
                    endY: 138,
                    label: `52-Week Low`
                }),
                new AnnotationLineDataItem(
                {
                    startX: 190,
                    startY: 481,
                    endX: 230,
                    endY: 481,
                    label: `52-Week High`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
//end data