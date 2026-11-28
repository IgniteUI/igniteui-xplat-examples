//begin data
import kotlin.math.PI;
import kotlin.math.sin;
import kotlin.math.cos;

public class ScatterWaveItem {
    public var x: Double = 0.0;
    public var sinValue: Double = 0.0;
    public var cosValue: Double = 0.0;
}

public class ScatterWaveData: ArrayList<ScatterWaveItem>() {
    init {
        for (degrees in -360..360 step 10) {
            val radians = degrees * PI / 180.0;
            val item = ScatterWaveItem();
            item.x = degrees.toDouble();
            item.sinValue = sin(radians);
            item.cosValue = cos(radians);
            add(item);
        }
    }
}
//end data
