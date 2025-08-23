//begin imports
//end imports

//begin data
public class ScatterHighDensityItem {
    public var x: Double = 0.0
    public var y: Double = 0.0
}

public class ScatterHighDensityData: [ScatterHighDensityItem] {

    public init() {
        let amount = 25000
        self.generate(count: amount / 2, centerX: 0.0, centerY: 0.0, spreadX: 75000.0, spreadY: 20000.0)
        self.generate(count: amount / 4, centerX: 0.0, centerY: 0.0, spreadX: 100000.0, spreadY: 25000.0)
        self.generate(count: amount / 8, centerX: 0.0, centerY: 0.0, spreadX: 150000.0, spreadY: 30000.0)
        self.generate(count: amount / 8, centerX: 0.0, centerY: 0.0, spreadX: 200000.0, spreadY: 75000.0)
    }

    public func generate(count: Int,
                         centerX: Double, centerY: Double,
                         spreadX: Double, spreadY: Double) {

        for _ in 0...count {
            var rangeX = Double.random(in: 0...1) * spreadX
            var rangeY = Double.random(in: 0...1) * spreadY
            let prop = Double.random(in: 0...1)

            switch prop {
            case ..<0.25:
                break
            case ..<0.5:
                rangeX *= -1
            case ..<0.75:
                rangeY *= -1
            default:
                rangeX *= -1
                rangeY *= -1
            }

            let dispersionX = Double.random(in: 0...1) + 0.12
            let dispersionY = Double.random(in: 0...1) + 0.12

            let item = ScatterHighDensityItem()
            item.x = centerX + (rangeX * dispersionX)
            item.y = centerY + (rangeY * dispersionY)

            self.append(item)
        }
    }
}
//end data
