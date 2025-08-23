//begin imports
//end imports

//begin data
public class InvoicesDataExtendedDates: [Invoice] {
    public init() {
        self.append(Invoice().apply {
            $0.ProductID = 1
            $0.ProductName = "Chai"
            $0.SupplierID = 1
            $0.CategoryID = 1
            $0.QuantityPerUnit = "10 boxes x 20 bags"
            $0.UnitPrice = 18.0000
            $0.UnitsInStock = 39
            $0.UnitsOnOrder = 0.030
            $0.ReorderLevel = 10
            $0.Discontinued = false
            $0.OrderDate = Invoice.toDate("2012-02-12")
            $0.OrderDateDelay = Invoice.toDate("2012-02-12")
            $0.OrderFullDate = Invoice.toDate("2012-02-12")
        })
        self.append(Invoice().apply {
            $0.ProductID = 2
            $0.ProductName = "Chang"
            $0.SupplierID = 1
            $0.CategoryID = 1
            $0.QuantityPerUnit = "24 - 12 oz bottles"
            $0.UnitPrice = 19.0000
            $0.UnitsInStock = 17
            $0.UnitsOnOrder = 0.040
            $0.ReorderLevel = 25
            $0.Discontinued = true
            $0.OrderDate = Invoice.toDate("2003-03-17")
            $0.OrderDateDelay = Invoice.toDate("2003-03-17")
            $0.OrderFullDate = Invoice.toDate("2003-03-17")
        })
        self.append(Invoice().apply {
            $0.ProductID = 3
            $0.ProductName = "Aniseed Syrup"
            $0.SupplierID = 1
            $0.CategoryID = 2
            $0.QuantityPerUnit = "12 - 550 ml bottles"
            $0.UnitPrice = 10.0000
            $0.UnitsInStock = 13
            $0.UnitsOnOrder = 0.070
            $0.ReorderLevel = 25
            $0.Discontinued = false
            $0.OrderDate = Invoice.toDate("2006-03-17")
            $0.OrderDateDelay = Invoice.toDate("2006-03-17")
            $0.OrderFullDate = Invoice.toDate("2006-03-17")
        })
        self.append(Invoice().apply {
            $0.ProductID = 4
            $0.ProductName = "Chef Antons Cajun Seasoning"
            $0.SupplierID = 2
            $0.CategoryID = 2
            $0.QuantityPerUnit = "48 - 6 oz jars"
            $0.UnitPrice = 22.0000
            $0.UnitsInStock = 53
            $0.UnitsOnOrder = 0.030
            $0.ReorderLevel = 0
            $0.Discontinued = false
            $0.OrderDate = Invoice.toDate("2016-03-17")
            $0.OrderDateDelay = Invoice.toDate("2016-03-17")
            $0.OrderFullDate = Invoice.toDate("2016-03-17")
        })
        self.append(Invoice().apply {
            $0.ProductID = 5
            $0.ProductName = "Chef Antons Gumbo Mix"
            $0.SupplierID = 2
            $0.CategoryID = 2
            $0.QuantityPerUnit = "36 boxes"
            $0.UnitPrice = 21.3500
            $0.UnitsInStock = 0
            $0.UnitsOnOrder = 0.030
            $0.ReorderLevel = 0
            $0.Discontinued = true
            $0.OrderDate = Invoice.toDate("2011-11-11")
            $0.OrderDateDelay = Invoice.toDate("2011-11-11")
            $0.OrderFullDate = Invoice.toDate("2011-11-11")
        })
        self.append(Invoice().apply {
            $0.ProductID = 6
            $0.ProductName = "Grandmas Boysenberry Spread"
            $0.SupplierID = 3
            $0.CategoryID = 2
            $0.QuantityPerUnit = "12 - 8 oz jars"
            $0.UnitPrice = 25.0000
            $0.UnitsInStock = 0
            $0.UnitsOnOrder = 0.030
            $0.ReorderLevel = 25
            $0.Discontinued = false
            $0.OrderDate = Invoice.toDate("2017-12-17")
            $0.OrderDateDelay = Invoice.toDate("2017-12-17")
            $0.OrderFullDate = Invoice.toDate("2017-12-17")
        })
        self.append(Invoice().apply {
            $0.ProductID = 7
            $0.ProductName = "Uncle Bobs Organic Dried Pears"
            $0.SupplierID = 3
            $0.CategoryID = 7
            $0.QuantityPerUnit = "12 - 1 lb pkgs."
            $0.UnitPrice = 30.0000
            $0.UnitsInStock = 150
            $0.UnitsOnOrder = 0.030
            $0.ReorderLevel = 10
            $0.Discontinued = false
            $0.OrderDate = Invoice.toDate("2016-07-17")
            $0.OrderDateDelay = Invoice.toDate("2016-07-17")
            $0.OrderFullDate = Invoice.toDate("2016-07-17")
        })
        self.append(Invoice().apply {
            $0.ProductID = 8
            $0.ProductName = "Northwoods Cranberry Sauce"
            $0.SupplierID = 3
            $0.CategoryID = 2
            $0.QuantityPerUnit = "12 - 12 oz jars"
            $0.UnitPrice = 40.0000
            $0.UnitsInStock = 6
            $0.UnitsOnOrder = 0.030
            $0.ReorderLevel = 0
            $0.Discontinued = false
            $0.OrderDate = Invoice.toDate("2018-01-17")
            $0.OrderDateDelay = Invoice.toDate("2018-01-17")
            $0.OrderFullDate = Invoice.toDate("2018-01-17")
        })
        self.append(Invoice().apply {
            $0.ProductID = 9
            $0.ProductName = "Mishi Kobe Niku"
            $0.SupplierID = 4
            $0.CategoryID = 6
            $0.QuantityPerUnit = "18 - 500 g pkgs."
            $0.UnitPrice = 97.0000
            $0.UnitsInStock = 29
            $0.UnitsOnOrder = 0.030
            $0.ReorderLevel = 0
            $0.Discontinued = true
            $0.OrderDate = Invoice.toDate("2010-02-17")
            $0.OrderDateDelay = Invoice.toDate("2010-02-17")
            $0.OrderFullDate = Invoice.toDate("2010-02-17")
        })
    }
}

public class Invoice {
    public init() {}

    public var ProductID: Int = 0
    public var ProductName: String? = nil
    public var SupplierID: Int = 0
    public var CategoryID: Int = 0
    public var QuantityPerUnit: String? = nil
    public var UnitPrice: Double = 0.0
    public var UnitsInStock: Int = 0
    public var UnitsOnOrder: Double = 0.0
    public var ReorderLevel: Int = 0
    public var Discontinued: Bool = false
    public var OrderDate: Date = Date()
    public var OrderDateDelay: Date = Date()
    public var OrderFullDate: Date = Date()

    public static func toDate(_ dateString: String) -> Date {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        return formatter.date(from: dateString) ?? Date()
    }
}
//end data
