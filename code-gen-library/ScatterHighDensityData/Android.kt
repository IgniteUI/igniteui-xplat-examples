//begin imports
//end imports

//begin data
class ScatterHighDensityItem {
    public var x: Double = 0.0
    public var y: Double = 0.0
}


public class ScatterHighDensityData: ArrayList<ScatterHighDensityItem> {

    public constructor() {
        var amount = 25000;
        this.generate(amount / 2, 0.0, 0.0, 75000.0, 20000.0);
        this.generate(amount / 4, 0.0, 0.0, 100000.0, 25000.0);
        this.generate(amount / 8, 0.0, 0.0, 150000.0, 30000.0);
        this.generate(amount / 8, 0.0, 0.0, 200000.0, 75000.0);
    }

    public fun generate(count: Int,
        centerX: Double, centerY: Double,
        spreadX: Double, spreadY: Double) {

        
        for (i in 0..count) {
            var rangeX = Math.random() * spreadX
            var rangeY = Math.random() * spreadY
            val prop = Math.random()

            when {
                prop < 0.25 -> {
                    // no change
                }
                prop < 0.5 -> {
                    rangeX *= -1
                }
                prop < 0.75 -> {
                    rangeY *= -1
                }
                else -> {
                    rangeX *= -1
                    rangeY *= -1
                }
            }

            val dispersionX = Math.random() + 0.12
            val dispersionY = Math.random() + 0.12

            val item = ScatterHighDensityItem().apply {
                x = (centerX + (rangeX * dispersionX))
                y = (centerY + (rangeY * dispersionY))
            }

            this.add(item)
        }
    }
}
//end data