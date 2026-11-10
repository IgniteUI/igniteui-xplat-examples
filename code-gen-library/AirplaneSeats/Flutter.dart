//begin async data
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/Point.dart' show Point;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// Every seat on the aircraft: its polygon, and what the sample colours it by -- which cabin class
// it belongs to and whether it is sold.
//
// Fetched rather than written out, as the other platforms have it. There are 232 seats and a few
// hundred points to each, and the point of a seating plan is that it is the whole plan; the JSON
// is published, so it is read from there.
//
// The keys stay as the C# and TypeScript spell them: a data item defined in code keeps its own
// casing across platforms, and these are the names the member paths in the descriptions ask for.
class AirplaneSeatsItem implements IReflectable, IReflectableSet {
    String? seat = null;
    String? price = null;
    String? seatClass = null;
    String? status = null;
    String? row = null;
    String? column = null;
    ArrayList<ArrayList<Point?>?>? points = null;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Seat":
                return this.seat;
            case "Price":
                return this.price;
            case "Class":
                return this.seatClass;
            case "Status":
                return this.status;
            case "Row":
                return this.row;
            case "Column":
                return this.column;
            case "Points":
                return this.points;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Seat":
                this.seat = value as String?;
                break;
            case "Price":
                this.price = value as String?;
                break;
            case "Class":
                this.seatClass = value as String?;
                break;
            case "Status":
                this.status = value as String?;
                break;
            case "Row":
                this.row = value as String?;
                break;
            case "Column":
                this.column = value as String?;
                break;
            case "Points":
                this.points = value as ArrayList<ArrayList<Point?>?>?;
                break;
        }
    }
}

class AirplaneSeats extends ArrayList<AirplaneSeatsItem?> {
    // HttpClient out of dart:io rather than a package: the emitted library
    // depends on the product packages and intl, and nothing else.
    static Future<AirplaneSeats> fetch() async {
        var url = "https://static.infragistics.com/xplatform/json/airplane-seats.json";
        var client = HttpClient();
        try {
            var request = await client.getUrl(Uri.parse(url));
            var response = await request.close();
            var text = await response.transform(utf8.decoder).join();
            return convert(jsonDecode(text) as List<dynamic>);
        } finally {
            client.close();
        }
    }

    // The points arrive as objects with an x and a y, which is what the JSON says; a shape series
    // wants them as points, so they are read across here rather than left for it to interpret.
    static AirplaneSeats convert(List<dynamic> records) {
        var data = AirplaneSeats();
        for (var entry in records) {
            var record = entry as Map<String, dynamic>;
            var item = AirplaneSeatsItem();
            item.seat = record["seat"] as String?;
            item.price = record["price"] as String?;
            item.seatClass = record["class"] as String?;
            item.status = record["status"] as String?;
            item.row = record["row"] as String?;
            item.column = record["column"] as String?;
            item.points = ArrayList<ArrayList<Point?>?>();
            var rings = record["points"] as List<dynamic>?;
            if (rings != null) {
                for (var ring in rings) {
                    var points = ArrayList<Point?>();
                    for (var p in (ring as List<dynamic>)) {
                        var point = p as Map<String, dynamic>;
                        points.add(Point.c1((point["x"] as num).toDouble(), (point["y"] as num).toDouble()));
                    }
                    item.points!.add(points);
                }
            }
            data.add(item);
        }
        return data;
    }
}
//end async data
