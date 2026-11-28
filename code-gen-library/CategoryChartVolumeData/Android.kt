//begin imports
import kotlin.math.round;
import kotlin.random.Random;
//end imports

//begin supportingTypes
public class CategoryChartVolumeItem {
    public var label: String = "";
    public var value: Double = 0.0;
}

public object CategoryChartVolumeData {
    public var count: Int = 500000;

    public fun generate(count: Int, startValue: Double = 0.0): ArrayList<CategoryChartVolumeItem> {
        val result = ArrayList<CategoryChartVolumeItem>(count + 1);
        var value = startValue;
        for (index in 0..count) {
            value += Random.nextDouble() * 4.0 - 2.0;
            val item = CategoryChartVolumeItem();
            item.label = toShortString(index);
            item.value = round(value);
            result.add(item);
        }
        return result;
    }

    public fun toShortString(value: Int): String {
        if (value >= 1000000) return tenths(round(value / 100000.0).toInt()) + "m";
        if (value >= 1000) return tenths(round(value / 100.0).toInt()) + "k";
        return value.toString();
    }

    private fun tenths(value: Int): String =
        if (value % 10 == 0) (value / 10).toString() else (value / 10.0).toString();
}
//end supportingTypes
