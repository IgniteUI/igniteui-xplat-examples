//begin async data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class SalesPerson implements IReflectable, IReflectableSet {
    int index = 0;
    String? firstName = null;
    String? lastName = null;
    String? name = null;
    String? imageName = null;
    String? territory = null;
    double avgSale = 0;
    double avgSaleHeat = 0;
    double change = 0;
    double percentChange = 0;
    double yearToDateSales = 0;
    DateTime? dateValue = null;
    double kpi0 = 0;
    double kpi1 = 0;
    double kpi2 = 0;
    double kpi3 = 0;
    double kpi4 = 0;
    double kpi5 = 0;
    double kpi6 = 0;
    double kpi7 = 0;
    double kpi8 = 0;
    double kpi9 = 0;
    double kpi10 = 0;
    double kpi11 = 0;
    double kpi12 = 0;
    double kpi13 = 0;
    double kpi14 = 0;
    double kpi15 = 0;
    double kpi16 = 0;
    double kpi17 = 0;
    double kpi18 = 0;
    double kpi19 = 0;
    double kpi20 = 0;
    double kpi21 = 0;
    double kpi22 = 0;
    double kpi23 = 0;
    double kpi24 = 0;
    double kpi25 = 0;
    double kpi26 = 0;
    double kpi27 = 0;
    double kpi28 = 0;
    double kpi29 = 0;
    double kpi30 = 0;
    double kpi31 = 0;
    double kpi32 = 0;
    double kpi33 = 0;
    double kpi34 = 0;
    double kpi35 = 0;
    double kpi36 = 0;
    double kpi37 = 0;
    double kpi38 = 0;
    double kpi39 = 0;
    double kpi40 = 0;
    double kpi41 = 0;
    double kpi42 = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Index":
                return this.index;
            case "FirstName":
                return this.firstName;
            case "LastName":
                return this.lastName;
            case "Name":
                return this.name;
            case "ImageName":
                return this.imageName;
            case "Territory":
                return this.territory;
            case "AvgSale":
                return this.avgSale;
            case "AvgSaleHeat":
                return this.avgSaleHeat;
            case "Change":
                return this.change;
            case "PercentChange":
                return this.percentChange;
            case "YearToDateSales":
                return this.yearToDateSales;
            case "DateValue":
                return this.dateValue;
            case "KPI_0":
                return this.kpi0;
            case "KPI_1":
                return this.kpi1;
            case "KPI_2":
                return this.kpi2;
            case "KPI_3":
                return this.kpi3;
            case "KPI_4":
                return this.kpi4;
            case "KPI_5":
                return this.kpi5;
            case "KPI_6":
                return this.kpi6;
            case "KPI_7":
                return this.kpi7;
            case "KPI_8":
                return this.kpi8;
            case "KPI_9":
                return this.kpi9;
            case "KPI_10":
                return this.kpi10;
            case "KPI_11":
                return this.kpi11;
            case "KPI_12":
                return this.kpi12;
            case "KPI_13":
                return this.kpi13;
            case "KPI_14":
                return this.kpi14;
            case "KPI_15":
                return this.kpi15;
            case "KPI_16":
                return this.kpi16;
            case "KPI_17":
                return this.kpi17;
            case "KPI_18":
                return this.kpi18;
            case "KPI_19":
                return this.kpi19;
            case "KPI_20":
                return this.kpi20;
            case "KPI_21":
                return this.kpi21;
            case "KPI_22":
                return this.kpi22;
            case "KPI_23":
                return this.kpi23;
            case "KPI_24":
                return this.kpi24;
            case "KPI_25":
                return this.kpi25;
            case "KPI_26":
                return this.kpi26;
            case "KPI_27":
                return this.kpi27;
            case "KPI_28":
                return this.kpi28;
            case "KPI_29":
                return this.kpi29;
            case "KPI_30":
                return this.kpi30;
            case "KPI_31":
                return this.kpi31;
            case "KPI_32":
                return this.kpi32;
            case "KPI_33":
                return this.kpi33;
            case "KPI_34":
                return this.kpi34;
            case "KPI_35":
                return this.kpi35;
            case "KPI_36":
                return this.kpi36;
            case "KPI_37":
                return this.kpi37;
            case "KPI_38":
                return this.kpi38;
            case "KPI_39":
                return this.kpi39;
            case "KPI_40":
                return this.kpi40;
            case "KPI_41":
                return this.kpi41;
            case "KPI_42":
                return this.kpi42;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Index":
                this.index = (value as num).toInt();
                break;
            case "FirstName":
                this.firstName = value as String?;
                break;
            case "LastName":
                this.lastName = value as String?;
                break;
            case "Name":
                this.name = value as String?;
                break;
            case "ImageName":
                this.imageName = value as String?;
                break;
            case "Territory":
                this.territory = value as String?;
                break;
            case "AvgSale":
                this.avgSale = (value as num).toDouble();
                break;
            case "AvgSaleHeat":
                this.avgSaleHeat = (value as num).toDouble();
                break;
            case "Change":
                this.change = (value as num).toDouble();
                break;
            case "PercentChange":
                this.percentChange = (value as num).toDouble();
                break;
            case "YearToDateSales":
                this.yearToDateSales = (value as num).toDouble();
                break;
            case "DateValue":
                this.dateValue = value as DateTime?;
                break;
            case "KPI_0":
                this.kpi0 = (value as num).toDouble();
                break;
            case "KPI_1":
                this.kpi1 = (value as num).toDouble();
                break;
            case "KPI_2":
                this.kpi2 = (value as num).toDouble();
                break;
            case "KPI_3":
                this.kpi3 = (value as num).toDouble();
                break;
            case "KPI_4":
                this.kpi4 = (value as num).toDouble();
                break;
            case "KPI_5":
                this.kpi5 = (value as num).toDouble();
                break;
            case "KPI_6":
                this.kpi6 = (value as num).toDouble();
                break;
            case "KPI_7":
                this.kpi7 = (value as num).toDouble();
                break;
            case "KPI_8":
                this.kpi8 = (value as num).toDouble();
                break;
            case "KPI_9":
                this.kpi9 = (value as num).toDouble();
                break;
            case "KPI_10":
                this.kpi10 = (value as num).toDouble();
                break;
            case "KPI_11":
                this.kpi11 = (value as num).toDouble();
                break;
            case "KPI_12":
                this.kpi12 = (value as num).toDouble();
                break;
            case "KPI_13":
                this.kpi13 = (value as num).toDouble();
                break;
            case "KPI_14":
                this.kpi14 = (value as num).toDouble();
                break;
            case "KPI_15":
                this.kpi15 = (value as num).toDouble();
                break;
            case "KPI_16":
                this.kpi16 = (value as num).toDouble();
                break;
            case "KPI_17":
                this.kpi17 = (value as num).toDouble();
                break;
            case "KPI_18":
                this.kpi18 = (value as num).toDouble();
                break;
            case "KPI_19":
                this.kpi19 = (value as num).toDouble();
                break;
            case "KPI_20":
                this.kpi20 = (value as num).toDouble();
                break;
            case "KPI_21":
                this.kpi21 = (value as num).toDouble();
                break;
            case "KPI_22":
                this.kpi22 = (value as num).toDouble();
                break;
            case "KPI_23":
                this.kpi23 = (value as num).toDouble();
                break;
            case "KPI_24":
                this.kpi24 = (value as num).toDouble();
                break;
            case "KPI_25":
                this.kpi25 = (value as num).toDouble();
                break;
            case "KPI_26":
                this.kpi26 = (value as num).toDouble();
                break;
            case "KPI_27":
                this.kpi27 = (value as num).toDouble();
                break;
            case "KPI_28":
                this.kpi28 = (value as num).toDouble();
                break;
            case "KPI_29":
                this.kpi29 = (value as num).toDouble();
                break;
            case "KPI_30":
                this.kpi30 = (value as num).toDouble();
                break;
            case "KPI_31":
                this.kpi31 = (value as num).toDouble();
                break;
            case "KPI_32":
                this.kpi32 = (value as num).toDouble();
                break;
            case "KPI_33":
                this.kpi33 = (value as num).toDouble();
                break;
            case "KPI_34":
                this.kpi34 = (value as num).toDouble();
                break;
            case "KPI_35":
                this.kpi35 = (value as num).toDouble();
                break;
            case "KPI_36":
                this.kpi36 = (value as num).toDouble();
                break;
            case "KPI_37":
                this.kpi37 = (value as num).toDouble();
                break;
            case "KPI_38":
                this.kpi38 = (value as num).toDouble();
                break;
            case "KPI_39":
                this.kpi39 = (value as num).toDouble();
                break;
            case "KPI_40":
                this.kpi40 = (value as num).toDouble();
                break;
            case "KPI_41":
                this.kpi41 = (value as num).toDouble();
                break;
            case "KPI_42":
                this.kpi42 = (value as num).toDouble();
                break;
        }
    }
}

class SalesPersonsData extends ArrayList<SalesPerson?> {
    SalesPersonsData([int count = 8000]) {
        var firstNames = <String>["Kyle","Gina","Irene","Katie","Michael","Oscar","Ralph","Torrey","William","Bill","Daniel","Frank","Brenda","Danielle","Fiona","Howard","Jack","Larry","Holly","Jennifer","Liz","Pete","Steve","Vince","Zeke"];
        var lastNames = <String>["Adams","Crowley","Ellis","Gable","Irvine","Keefe","Mendoza","Owens","Rooney","Waddell","Thomas","Betts","Doran","Fitzgerald","Holmes","Jefferson","Landry","Newberry","Perez","Spencer","Vargas","Grimes","Edwards","Stark","Cruise","Fitz","Chief","Blanc","Perry","Stone","Williams","Lane","Jobs"];
        var territories = <String>["Australia","Canada","Egypt","Greece","Italy","Kenya","Mexico","Oman","Qatar","Sweden","Uruguay","Yemen","Bulgaria","Denmark","France","Hungary","Japan","Latvia","Netherlands","Portugal","Russia","Turkey","Venezuela","Zimbabwe"];
        var rand = math.Random();
        var today = DateTime.now();
        for (var i = 0; i < count; i++) {
            var firstIndex = (rand.nextDouble() * (firstNames.length - 1)).round();
            var item = SalesPerson();
            item.index = i;
            item.firstName = firstNames[firstIndex];
            item.lastName = lastNames[(rand.nextDouble() * (lastNames.length - 1)).round()];
            item.name = (item.firstName ?? "") + (item.lastName ?? "");
            item.imageName = "";
            item.territory = territories[(rand.nextDouble() * (territories.length - 1)).round()];
            item.avgSale = (rand.nextDouble() * 800).roundToDouble() + 200.0;
            item.change = rand.nextDouble() * 40.0 - 20.0;
            item.percentChange = 0;
            item.yearToDateSales = (rand.nextDouble() * 50000).roundToDouble();
            item.dateValue = today.add(Duration(days: (rand.nextDouble() * 500).round()));
            SalesPersonsData.assignKpis(item, rand);
            this.add(item);
        }
    }

    static void assignKpis(SalesPerson item, math.Random rand) {
        item.kpi0 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi1 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi2 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi3 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi4 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi5 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi6 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi7 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi8 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi9 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi10 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi11 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi12 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi13 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi14 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi15 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi16 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi17 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi18 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi19 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi20 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi21 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi22 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi23 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi24 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi25 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi26 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi27 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi28 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi29 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi30 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi31 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi32 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi33 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi34 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi35 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi36 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi37 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi38 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi39 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi40 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi41 = (rand.nextDouble() * 100.0).roundToDouble();
        item.kpi42 = (rand.nextDouble() * 100.0).roundToDouble();
    }
}
//end async data
