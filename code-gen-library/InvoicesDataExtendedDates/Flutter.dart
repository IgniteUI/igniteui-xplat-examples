//begin data
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class Invoice implements IReflectable, IReflectableSet {
    int productID = 0;
    String? productName = null;
    int supplierID = 0;
    int categoryID = 0;
    String? quantityPerUnit = null;
    double unitPrice = 0;
    int unitsInStock = 0;
    double unitsOnOrder = 0;
    int reorderLevel = 0;
    bool discontinued = false;
    // Kotlin parses these with SimpleDateFormat("yyyy-MM-dd"), which reads a bare
    // date in the local zone; DateTime.parse does the same for an ISO date with no
    // zone on it, so these land on the same instant they do there.
    DateTime? orderDate = null;
    DateTime? orderDateDelay = null;
    DateTime? orderFullDate = null;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "ProductID":
                return this.productID;
            case "ProductName":
                return this.productName;
            case "SupplierID":
                return this.supplierID;
            case "CategoryID":
                return this.categoryID;
            case "QuantityPerUnit":
                return this.quantityPerUnit;
            case "UnitPrice":
                return this.unitPrice;
            case "UnitsInStock":
                return this.unitsInStock;
            case "UnitsOnOrder":
                return this.unitsOnOrder;
            case "ReorderLevel":
                return this.reorderLevel;
            case "Discontinued":
                return this.discontinued;
            case "OrderDate":
                return this.orderDate;
            case "OrderDateDelay":
                return this.orderDateDelay;
            case "OrderFullDate":
                return this.orderFullDate;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "ProductID":
                this.productID = (value as num).toInt();
                break;
            case "ProductName":
                this.productName = value as String?;
                break;
            case "SupplierID":
                this.supplierID = (value as num).toInt();
                break;
            case "CategoryID":
                this.categoryID = (value as num).toInt();
                break;
            case "QuantityPerUnit":
                this.quantityPerUnit = value as String?;
                break;
            case "UnitPrice":
                this.unitPrice = (value as num).toDouble();
                break;
            case "UnitsInStock":
                this.unitsInStock = (value as num).toInt();
                break;
            case "UnitsOnOrder":
                this.unitsOnOrder = (value as num).toDouble();
                break;
            case "ReorderLevel":
                this.reorderLevel = (value as num).toInt();
                break;
            case "Discontinued":
                this.discontinued = value as bool;
                break;
            case "OrderDate":
                this.orderDate = value as DateTime?;
                break;
            case "OrderDateDelay":
                this.orderDateDelay = value as DateTime?;
                break;
            case "OrderFullDate":
                this.orderFullDate = value as DateTime?;
                break;
        }
    }
}

class InvoicesDataExtendedDates extends ArrayList<Invoice?> {
    InvoicesDataExtendedDates() {
        this.add(Invoice()
            ..productID = 1
            ..productName = "Chai"
            ..supplierID = 1
            ..categoryID = 1
            ..quantityPerUnit = "10 boxes x 20 bags"
            ..unitPrice = 18.0000
            ..unitsInStock = 39
            ..unitsOnOrder = 0.030
            ..reorderLevel = 10
            ..discontinued = false
            ..orderDate = DateTime.parse("2012-02-12")
            ..orderDateDelay = DateTime.parse("2012-02-12")
            ..orderFullDate = DateTime.parse("2012-02-12"));
        this.add(Invoice()
            ..productID = 2
            ..productName = "Chang"
            ..supplierID = 1
            ..categoryID = 1
            ..quantityPerUnit = "24 - 12 oz bottles"
            ..unitPrice = 19.0000
            ..unitsInStock = 17
            ..unitsOnOrder = 0.040
            ..reorderLevel = 25
            ..discontinued = true
            ..orderDate = DateTime.parse("2003-03-17")
            ..orderDateDelay = DateTime.parse("2003-03-17")
            ..orderFullDate = DateTime.parse("2003-03-17"));
        this.add(Invoice()
            ..productID = 3
            ..productName = "Aniseed Syrup"
            ..supplierID = 1
            ..categoryID = 2
            ..quantityPerUnit = "12 - 550 ml bottles"
            ..unitPrice = 10.0000
            ..unitsInStock = 13
            ..unitsOnOrder = 0.070
            ..reorderLevel = 25
            ..discontinued = false
            ..orderDate = DateTime.parse("2006-03-17")
            ..orderDateDelay = DateTime.parse("2006-03-17")
            ..orderFullDate = DateTime.parse("2006-03-17"));
        this.add(Invoice()
            ..productID = 4
            ..productName = "Chef Antons Cajun Seasoning"
            ..supplierID = 2
            ..categoryID = 2
            ..quantityPerUnit = "48 - 6 oz jars"
            ..unitPrice = 22.0000
            ..unitsInStock = 53
            ..unitsOnOrder = 0.030
            ..reorderLevel = 0
            ..discontinued = false
            ..orderDate = DateTime.parse("2016-03-17")
            ..orderDateDelay = DateTime.parse("2016-03-17")
            ..orderFullDate = DateTime.parse("2016-03-17"));
        this.add(Invoice()
            ..productID = 5
            ..productName = "Chef Antons Gumbo Mix"
            ..supplierID = 2
            ..categoryID = 2
            ..quantityPerUnit = "36 boxes"
            ..unitPrice = 21.3500
            ..unitsInStock = 0
            ..unitsOnOrder = 0.030
            ..reorderLevel = 0
            ..discontinued = true
            ..orderDate = DateTime.parse("2011-11-11")
            ..orderDateDelay = DateTime.parse("2011-11-11")
            ..orderFullDate = DateTime.parse("2011-11-11"));
        this.add(Invoice()
            ..productID = 6
            ..productName = "Grandmas Boysenberry Spread"
            ..supplierID = 3
            ..categoryID = 2
            ..quantityPerUnit = "12 - 8 oz jars"
            ..unitPrice = 25.0000
            ..unitsInStock = 0
            ..unitsOnOrder = 0.030
            ..reorderLevel = 25
            ..discontinued = false
            ..orderDate = DateTime.parse("2017-12-17")
            ..orderDateDelay = DateTime.parse("2017-12-17")
            ..orderFullDate = DateTime.parse("2017-12-17"));
        this.add(Invoice()
            ..productID = 7
            ..productName = "Uncle Bobs Organic Dried Pears"
            ..supplierID = 3
            ..categoryID = 7
            ..quantityPerUnit = "12 - 1 lb pkgs."
            ..unitPrice = 30.0000
            ..unitsInStock = 150
            ..unitsOnOrder = 0.030
            ..reorderLevel = 10
            ..discontinued = false
            ..orderDate = DateTime.parse("2016-07-17")
            ..orderDateDelay = DateTime.parse("2016-07-17")
            ..orderFullDate = DateTime.parse("2016-07-17"));
        this.add(Invoice()
            ..productID = 8
            ..productName = "Northwoods Cranberry Sauce"
            ..supplierID = 3
            ..categoryID = 2
            ..quantityPerUnit = "12 - 12 oz jars"
            ..unitPrice = 40.0000
            ..unitsInStock = 6
            ..unitsOnOrder = 0.030
            ..reorderLevel = 0
            ..discontinued = false
            ..orderDate = DateTime.parse("2018-01-17")
            ..orderDateDelay = DateTime.parse("2018-01-17")
            ..orderFullDate = DateTime.parse("2018-01-17"));
        this.add(Invoice()
            ..productID = 9
            ..productName = "Mishi Kobe Niku"
            ..supplierID = 4
            ..categoryID = 6
            ..quantityPerUnit = "18 - 500 g pkgs."
            ..unitPrice = 97.0000
            ..unitsInStock = 29
            ..unitsOnOrder = 0.030
            ..reorderLevel = 0
            ..discontinued = true
            ..orderDate = DateTime.parse("2010-02-17")
            ..orderDateDelay = DateTime.parse("2010-02-17")
            ..orderFullDate = DateTime.parse("2010-02-17"));
    }
}
//end data
