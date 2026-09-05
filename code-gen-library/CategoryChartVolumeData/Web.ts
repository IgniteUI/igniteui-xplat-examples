//begin imports
//end imports

//begin supportingTypes
// The data these performance samples bind is generated rather than stored, because their whole
// subject is how many points the chart will take -- the count comes from a control, so no fixed
// data item could stand in for it. Shared by the entry points that generate the first set and the
// button that generates another.
export class CategoryChartVolumeItem {
    public Label: string;
    public Value: number;
}

export class CategoryChartVolumeData {

    // How many points to generate next. The slider writes it and the button reads it, because the
    // demo deliberately keeps them apart: regenerating a million points on every step of the slider
    // would make the slider unusable, which is the opposite of what a performance sample should show.
    public static count: number = 500000;

    // A random walk: each reading steps up to two either side of the one before, which gives a line
    // that looks like a signal rather than noise, at any length.
    public static generate(count: number, startValue: number = 0): CategoryChartVolumeItem[] {
        var data: CategoryChartVolumeItem[] = [];
        var value = startValue;
        for (var i = 0; i <= count; i++) {
            value += Math.random() * 4.0 - 2.0;
            var item = new CategoryChartVolumeItem();
            item.Label = CategoryChartVolumeData.toShortString(i);
            item.Value = Math.round(value);
            data.push(item);
        }
        return data;
    }

    // Axis labels have no room for six digits, so the count is abbreviated the way the reader of a
    // chart this size would write it.
    public static toShortString(largeValue: number): string {
        if (largeValue >= 1000000) {
            return (Math.round(largeValue / 100000) / 10) + "m";
        }
        if (largeValue >= 1000) {
            return (Math.round(largeValue / 100) / 10) + "k";
        }
        return Math.round(largeValue) + "";
    }
}
//end supportingTypes
