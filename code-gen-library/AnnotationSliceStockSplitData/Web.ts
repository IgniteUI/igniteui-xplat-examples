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
export class AnnotationSliceStockSplitData extends Array<AnnotationSliceDataItem> {
    public constructor(items: Array<AnnotationSliceDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceDataItem(
                {
                    value: 126,
                    label: `Stock Split 3-1`
                }),
                new AnnotationSliceDataItem(
                {
                    value: 61,
                    label: `Stock Split 5-1`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
//end data