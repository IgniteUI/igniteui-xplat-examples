//begin data
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/Point.dart' show Point;

// A list of rings, each a list of points -- no item type and no member paths,
// so nothing here answers to reflection the way the other data items do.
class TestScatterShapeData8 extends ArrayList<ArrayList<Point?>?> {
    TestScatterShapeData8() {
        _ring(10, 10, 10, 40, 40, 40, 40, 10);
        _ring(60, 10, 60, 40, 90, 40, 90, 10);
        _ring(10, 60, 10, 90, 40, 90, 40, 60);
        _ring(60, 60, 60, 90, 90, 90, 90, 60);
    }

    void _ring(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4) {
        var l = ArrayList<Point?>();
        l.add(Point.c1(x1, y1));
        l.add(Point.c1(x2, y2));
        l.add(Point.c1(x3, y3));
        l.add(Point.c1(x4, y4));
        this.add(l);
    }
}
//end data
