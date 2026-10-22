//begin imports
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/LocalDataSource_combined.dart' show LocalDataSource;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;
//end imports

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class RetailSalesPerformanceDataLDSItem implements IReflectable, IReflectableSet {
    String? category = null;
    String? subcategory = null;
    String? product = null;
    int sales = 0;
    double revenue = 0;
    double profit = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Category":
                return this.category;
            case "Subcategory":
                return this.subcategory;
            case "Product":
                return this.product;
            case "Sales":
                return this.sales;
            case "Revenue":
                return this.revenue;
            case "Profit":
                return this.profit;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Category":
                this.category = value as String?;
                break;
            case "Subcategory":
                this.subcategory = value as String?;
                break;
            case "Product":
                this.product = value as String?;
                break;
            case "Sales":
                this.sales = (value as num).toInt();
                break;
            case "Revenue":
                this.revenue = (value as num).toDouble();
                break;
            case "Profit":
                this.profit = (value as num).toDouble();
                break;
        }
    }
}

/// A data source rather than a collection, as the C# has it: the rows are put
/// together here and handed to LocalDataSource as its items.
class RetailSalesPerformanceLocalDataSource extends LocalDataSource {
    final ArrayList<RetailSalesPerformanceDataLDSItem?> _data = ArrayList<RetailSalesPerformanceDataLDSItem?>();

    // The rows all name the same six fields in the same order, so they read as
    // calls rather than as a hundred repeated initialisers.
    void _item(String category, String subcategory, String product, int sales, double revenue, double profit) {
        _data.add((RetailSalesPerformanceDataLDSItem()
            ..category = category
            ..subcategory = subcategory
            ..product = product
            ..sales = sales
            ..revenue = revenue
            ..profit = profit
        ));
    }

    RetailSalesPerformanceLocalDataSource() {
        _item("Home Appliances", "Cleaning", "Vacuum A", 694, 528828, 105765.6);
        _item("Home Appliances", "Cleaning", "Mop B", 675, 382050, 76410.0);
        _item("Electronics", "Laptops", "Laptop C", 671, 504592, 100918.40000000001);
        _item("Furniture", "Bedroom", "Wardrobe B", 212, 54060, 10812.0);
        _item("Home Appliances", "Kitchen", "Blender A", 181, 79821, 15964.2);
        _item("Furniture", "Bedroom", "Dresser C", 434, 148428, 29685.600000000002);
        _item("Furniture", "Office", "Desk A", 441, 244314, 48862.8);
        _item("Furniture", "Bedroom", "Dresser C", 429, 167739, 33547.8);
        _item("Furniture", "Office", "Desk A", 537, 516594, 103318.8);
        _item("Home Appliances", "Cleaning", "Broom C", 439, 340225, 68045.0);
        _item("Home Appliances", "Laundry", "Dryer B", 338, 176774, 35354.8);
        _item("Home Appliances", "Laundry", "Iron C", 510, 380460, 76092.0);
        _item("Electronics", "Mobile Phones", "Smartphone A", 882, 480690, 96138.0);
        _item("Home Appliances", "Kitchen", "Microwave B", 504, 195048, 39009.6);
        _item("Furniture", "Office", "Desk A", 633, 243072, 48614.4);
        _item("Home Appliances", "Cleaning", "Broom C", 772, 470148, 94029.6);
        _item("Electronics", "Tablets", "Tablet B", 910, 413140, 82628.0);
        _item("Furniture", "Bedroom", "Dresser C", 53, 48813, 9762.6);
        _item("Electronics", "Mobile Phones", "Smartphone C", 741, 259350, 51870.0);
        _item("Home Appliances", "Cleaning", "Vacuum A", 944, 607936, 121587.20000000001);
        _item("Home Appliances", "Kitchen", "Toaster C", 644, 293020, 58604.0);
        _item("Electronics", "Tablets", "Tablet B", 692, 405512, 81102.40000000001);
        _item("Furniture", "Living Room", "Coffee Table B", 378, 300888, 60177.600000000006);
        _item("Furniture", "Bedroom", "Bed A", 717, 205779, 41155.8);
        _item("Home Appliances", "Laundry", "Washing Machine", 399, 83391, 16678.2);
        _item("Home Appliances", "Laundry", "Dryer B", 107, 55533, 11106.6);
        _item("Electronics", "Mobile Phones", "Smartphone A", 853, 512653, 102530.6);
        _item("Home Appliances", "Kitchen", "Toaster C", 830, 392590, 78518.0);
        _item("Electronics", "Mobile Phones", "Smartphone C", 527, 463760, 92752.0);
        _item("Home Appliances", "Kitchen", "Toaster C", 847, 579348, 115869.6);
        _item("Furniture", "Living Room", "TV Stand C", 692, 382676, 76535.2);
        _item("Electronics", "Laptops", "Laptop A", 799, 288439, 57687.8);
        _item("Furniture", "Living Room", "Coffee Table B", 764, 374360, 74872.0);
        _item("Furniture", "Living Room", "TV Stand C", 263, 88894, 17778.8);
        _item("Furniture", "Bedroom", "Bed A", 784, 254800, 50960.0);
        _item("Home Appliances", "Laundry", "Dryer B", 958, 695508, 139101.6);
        _item("Electronics", "Laptops", "Laptop B", 528, 209616, 41923.200000000004);
        _item("Electronics", "Laptops", "Laptop B", 499, 257983, 51596.600000000006);
        _item("Furniture", "Office", "Bookshelf C", 385, 346500, 69300.0);
        _item("Electronics", "Mobile Phones", "Smartphone A", 388, 84972, 16994.4);
        _item("Home Appliances", "Laundry", "Dryer B", 347, 99936, 19987.2);
        _item("Furniture", "Office", "Bookshelf C", 337, 252413, 50482.600000000006);
        _item("Electronics", "Laptops", "Laptop B", 985, 246250, 49250.0);
        _item("Furniture", "Living Room", "TV Stand C", 881, 870428, 174085.6);
        _item("Furniture", "Bedroom", "Wardrobe B", 508, 325628, 65125.600000000006);
        _item("Furniture", "Office", "Chair B", 87, 85347, 17069.4);
        _item("Furniture", "Bedroom", "Dresser C", 86, 50740, 10148.0);
        _item("Electronics", "Laptops", "Laptop B", 699, 320142, 64028.4);
        _item("Home Appliances", "Cleaning", "Vacuum A", 57, 12483, 2496.6000000000004);
        _item("Electronics", "Tablets", "Tablet C", 65, 15860, 3172.0);
        _item("Furniture", "Living Room", "Sofa A", 67, 39396, 7879.200000000001);
        _item("Furniture", "Living Room", "Sofa A", 835, 617065, 123413.0);
        _item("Furniture", "Bedroom", "Wardrobe B", 333, 115884, 23176.800000000003);
        _item("Electronics", "Laptops", "Laptop A", 802, 737840, 147568.0);
        _item("Furniture", "Living Room", "Sofa A", 483, 318780, 63756.0);
        _item("Home Appliances", "Cleaning", "Vacuum A", 586, 395550, 79110.0);
        _item("Furniture", "Living Room", "TV Stand C", 971, 208765, 41753.0);
        _item("Furniture", "Bedroom", "Wardrobe B", 464, 409248, 81849.6);
        _item("Electronics", "Tablets", "Tablet A", 933, 880752, 176150.40000000002);
        _item("Home Appliances", "Laundry", "Washing Machine", 812, 614684, 122936.8);
        _item("Furniture", "Living Room", "Coffee Table B", 499, 398202, 79640.40000000001);
        _item("Home Appliances", "Laundry", "Dryer B", 376, 344040, 68808.0);
        _item("Electronics", "Tablets", "Tablet A", 368, 354384, 70876.8);
        _item("Home Appliances", "Cleaning", "Broom C", 539, 446831, 89366.20000000001);
        _item("Furniture", "Living Room", "Sofa A", 954, 221328, 44265.600000000006);
        _item("Electronics", "Tablets", "Tablet A", 118, 69856, 13971.2);
        _item("Home Appliances", "Laundry", "Washing Machine", 839, 315464, 63092.8);
        _item("Home Appliances", "Cleaning", "Broom C", 207, 42435, 8487.0);
        _item("Furniture", "Office", "Chair B", 604, 197508, 39501.600000000006);
        _item("Furniture", "Office", "Bookshelf C", 187, 171479, 34295.8);
        _item("Home Appliances", "Cleaning", "Vacuum A", 709, 627465, 125493.0);
        _item("Electronics", "Mobile Phones", "Smartphone B", 197, 51811, 10362.2);
        _item("Home Appliances", "Cleaning", "Vacuum A", 374, 147356, 29471.2);
        _item("Home Appliances", "Cleaning", "Mop B", 340, 82280, 16456.0);
        _item("Electronics", "Mobile Phones", "Smartphone C", 538, 432014, 86402.8);
        _item("Furniture", "Bedroom", "Bed A", 270, 126900, 25380.0);
        _item("Home Appliances", "Cleaning", "Vacuum A", 161, 106743, 21348.600000000002);
        _item("Home Appliances", "Laundry", "Washing Machine", 571, 367724, 73544.8);
        _item("Home Appliances", "Kitchen", "Toaster C", 425, 308975, 61795.0);
        _item("Furniture", "Office", "Bookshelf C", 100, 37200, 7440.0);
        _item("Furniture", "Living Room", "Sofa A", 1000, 886000, 177200.0);
        _item("Electronics", "Mobile Phones", "Smartphone A", 202, 107464, 21492.800000000003);
        _item("Home Appliances", "Kitchen", "Microwave B", 877, 182416, 36483.200000000004);
        _item("Electronics", "Tablets", "Tablet A", 401, 247818, 49563.600000000006);
        _item("Furniture", "Bedroom", "Wardrobe B", 830, 528710, 105742.0);
        _item("Electronics", "Tablets", "Tablet C", 547, 136203, 27240.600000000002);
        _item("Electronics", "Laptops", "Laptop B", 539, 343882, 68776.40000000001);
        _item("Home Appliances", "Kitchen", "Microwave B", 334, 164996, 32999.200000000004);
        _item("Furniture", "Living Room", "TV Stand C", 232, 180960, 36192.0);
        _item("Electronics", "Tablets", "Tablet C", 448, 351680, 70336.0);
        _item("Electronics", "Mobile Phones", "Smartphone B", 387, 279801, 55960.200000000004);
        _item("Home Appliances", "Cleaning", "Mop B", 69, 49473, 9894.6);
        _item("Home Appliances", "Kitchen", "Toaster C", 859, 359921, 71984.2);
        _item("Furniture", "Office", "Chair B", 322, 112056, 22411.2);
        _item("Electronics", "Tablets", "Tablet A", 143, 54912, 10982.400000000001);
        _item("Electronics", "Laptops", "Laptop B", 844, 642284, 128456.8);
        _item("Electronics", "Laptops", "Laptop A", 735, 386610, 77322.0);
        _item("Electronics", "Mobile Phones", "Smartphone A", 431, 125852, 25170.4);
        _item("Furniture", "Living Room", "Sofa A", 926, 623198, 124639.6);
        _item("Home Appliances", "Cleaning", "Broom C", 117, 50193, 10038.6);
        this.itemsSource = _data;
    }
}
//end data
