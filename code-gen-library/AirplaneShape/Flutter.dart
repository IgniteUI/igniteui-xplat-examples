//begin async data
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/Point.dart' show Point;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The outline of the aircraft, as one polygon: a list of rings, each a list of points, which is
// what a shape series reads through its shape member path.
//
// Fetched rather than written out, as the other platforms have it. The shape is a few thousand
// points and the seating plan beside it is a few hundred times that; both are published as JSON,
// and a sample about drawing shapes is better for having the real outline than a simplified one
// that would fit in a file here.
//
// The keys stay as the C# and TypeScript spell them: a data item defined in code keeps its own
// casing across platforms, and these are the names the member paths in the descriptions ask for.
class AirplaneShapeItem implements IReflectable, IReflectableSet {
    ArrayList<ArrayList<Point?>?>? points = null;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Points":
                return this.points;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Points":
                this.points = value as ArrayList<ArrayList<Point?>?>?;
                break;
        }
    }
}

class AirplaneShape extends ArrayList<AirplaneShapeItem?> {
    // HttpClient out of dart:io rather than a package: the emitted library
    // depends on the product packages and intl, and nothing else.
    static Future<AirplaneShape> fetch() async {
        var url = "https://static.infragistics.com/xplatform/json/airplane-shape.json";
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
    static AirplaneShape convert(List<dynamic> records) {
        var data = AirplaneShape();
        for (var entry in records) {
            var record = entry as Map<String, dynamic>;
            var item = AirplaneShapeItem();
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
