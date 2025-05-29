//begin imports
//end imports

//begin data
export class AnnotationSliceDataItem {
    public constructor(init: Partial<AnnotationSliceDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceEarningsMissData extends Array<AnnotationSliceDataItem> {
    public constructor(items: Array<AnnotationSliceDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceDataItem(
                {
                    value: 9,
                    label: `Earnings Miss`
                }),
                new AnnotationSliceDataItem(
                {
                    value: 179,
                    label: `Earnings Miss`
                }),
                new AnnotationSliceDataItem(
                {
                    value: 215,
                    label: `Earnings Miss`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
//end data