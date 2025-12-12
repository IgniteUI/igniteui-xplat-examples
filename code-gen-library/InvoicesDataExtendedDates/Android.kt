//begin imports
//end imports

//begin data
public class InvoicesDataExtendedDates: ArrayList<Invoice>
{
    public constructor() {
        this.add(Invoice().apply {
                    ProductID = 1
                    ProductName = "Chai"
                    SupplierID = 1
                    CategoryID = 1
                    QuantityPerUnit = "10 boxes x 20 bags"
                    UnitPrice = 18.0000
                    UnitsInStock = 39
                    UnitsOnOrder = 0.030
                    ReorderLevel = 10
                    Discontinued = false
                    OrderDate = toDate("2012-02-12")
                    OrderDateDelay = toDate("2012-02-12")
                    OrderFullDate = toDate("2012-02-12")
                });
                this.add(Invoice().apply
                {
                    ProductID = 2
                    ProductName = "Chang"
                    SupplierID = 1
                    CategoryID = 1
                    QuantityPerUnit = "24 - 12 oz bottles"
                    UnitPrice = 19.0000
                    UnitsInStock = 17
                    UnitsOnOrder = 0.040
                    ReorderLevel = 25
                    Discontinued = true
                    OrderDate = toDate("2003-03-17")
                    OrderDateDelay = toDate("2003-03-17")
                    OrderFullDate = toDate("2003-03-17")
                });
                this.add(Invoice().apply
                {
                    ProductID = 3
                    ProductName = "Aniseed Syrup"
                    SupplierID = 1
                    CategoryID = 2
                    QuantityPerUnit = "12 - 550 ml bottles"
                    UnitPrice = 10.0000
                    UnitsInStock = 13
                    UnitsOnOrder = 0.070
                    ReorderLevel = 25
                    Discontinued = false
                    OrderDate = toDate("2006-03-17")
                    OrderDateDelay = toDate("2006-03-17")
                    OrderFullDate = toDate("2006-03-17")
                });
                this.add(Invoice().apply
                {
                    ProductID = 4
                    ProductName = "Chef Antons Cajun Seasoning"
                    SupplierID = 2
                    CategoryID = 2
                    QuantityPerUnit = "48 - 6 oz jars"
                    UnitPrice = 22.0000
                    UnitsInStock = 53
                    UnitsOnOrder = 0.030
                    ReorderLevel = 0
                    Discontinued = false
                    OrderDate = toDate("2016-03-17")
                    OrderDateDelay = toDate("2016-03-17")
                    OrderFullDate = toDate("2016-03-17")
                });
                this.add(Invoice().apply
                {
                    ProductID = 5
                    ProductName = "Chef Antons Gumbo Mix"
                    SupplierID = 2
                    CategoryID = 2
                    QuantityPerUnit = "36 boxes"
                    UnitPrice = 21.3500
                    UnitsInStock = 0
                    UnitsOnOrder = 0.030
                    ReorderLevel = 0
                    Discontinued = true
                    OrderDate = toDate("2011-11-11")
                    OrderDateDelay = toDate("2011-11-11")
                    OrderFullDate = toDate("2011-11-11")
                });
                this.add(Invoice().apply
                {
                    ProductID = 6
                    ProductName = "Grandmas Boysenberry Spread"
                    SupplierID = 3
                    CategoryID = 2
                    QuantityPerUnit = "12 - 8 oz jars"
                    UnitPrice = 25.0000
                    UnitsInStock = 0
                    UnitsOnOrder = 0.030
                    ReorderLevel = 25
                    Discontinued = false
                    OrderDate = toDate("2017-12-17")
                    OrderDateDelay = toDate("2017-12-17")
                    OrderFullDate = toDate("2017-12-17")
                });
                this.add(Invoice().apply
                {
                    ProductID = 7
                    ProductName = "Uncle Bobs Organic Dried Pears"
                    SupplierID = 3
                    CategoryID = 7
                    QuantityPerUnit = "12 - 1 lb pkgs."
                    UnitPrice = 30.0000
                    UnitsInStock = 150
                    UnitsOnOrder = 0.030
                    ReorderLevel = 10
                    Discontinued = false
                    OrderDate = toDate("2016-07-17")
                    OrderDateDelay = toDate("2016-07-17")
                    OrderFullDate = toDate("2016-07-17")
                });
                this.add(Invoice().apply
                {
                    ProductID = 8
                    ProductName = "Northwoods Cranberry Sauce"
                    SupplierID = 3
                    CategoryID = 2
                    QuantityPerUnit = "12 - 12 oz jars"
                    UnitPrice = 40.0000
                    UnitsInStock = 6
                    UnitsOnOrder = 0.030
                    ReorderLevel = 0
                    Discontinued = false
                    OrderDate = toDate("2018-01-17")
                    OrderDateDelay = toDate("2018-01-17")
                    OrderFullDate = toDate("2018-01-17")
                });
                this.add(Invoice().apply
                {
                    ProductID = 9
                    ProductName = "Mishi Kobe Niku"
                    SupplierID = 4
                    CategoryID = 6
                    QuantityPerUnit = "18 - 500 g pkgs."
                    UnitPrice = 97.0000
                    UnitsInStock = 29
                    UnitsOnOrder = 0.030
                    ReorderLevel = 0
                    Discontinued = true
                    OrderDate = toDate("2010-02-17")
                    OrderDateDelay = toDate("2010-02-17")
                    OrderFullDate = toDate("2010-02-17")
                });
    }

}

public class Invoice
{
    public constructor() {
    }
    public var ProductID: Int = 0;
    public var ProductName: String? = null;
    public var SupplierID: Int = 0;
    public var CategoryID: Int = 0;
    public var QuantityPerUnit: String? = null;
    public var UnitPrice: Double = 0.0;
    public var UnitsInStock: Int = 0;
    public var UnitsOnOrder: Double = 0.0;
    public var ReorderLevel: Int = 0;
    public var Discontinued: Boolean = false;
    public var OrderDate: java.util.Calendar = java.util.Calendar.getInstance();
    public var OrderDateDelay: java.util.Calendar = java.util.Calendar.getInstance();
    public var OrderFullDate: java.util.Calendar = java.util.Calendar.getInstance();

    public fun toDate(dateString: String): java.util.Calendar {
        val calendar = java.util.Calendar.getInstance()
        try {
            val dateFormat = java.text.SimpleDateFormat("yyyy-MM-dd")
            calendar.time = dateFormat.parse(dateString)
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return calendar
    }
}
//end data

