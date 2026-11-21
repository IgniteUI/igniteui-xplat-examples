//begin imports
import 'package:flutter/widgets.dart';
import 'package:igniteui_flutter_charts/src/igf-series-viewer.dart';
import 'package:igniteui_flutter_charts/src/igf-user-annotation-tool-tip-content-updating-event-args.dart';
import 'package:igniteui_flutter_core/src/NativeUIComponent.dart';
import 'package:igniteui_flutter_core/src/NativeUIContainer.dart';
import 'package:igniteui_flutter_core/src/NativeUIComponentBuiltInType.dart';
import 'package:igniteui_flutter_core/src/NativeUIElementFactoryFlavor.dart';
import 'package:igniteui_flutter_core/src/proxies.dart' show IgFlutterExternalProxy;
import 'package:igniteui_flutter_core/src/type.dart' show Action$1;
//end imports

class DataChartUserAnnotationTooltip {
  //begin eventHandler
  void dataChartUserAnnotationTooltip(
      Object? sender, IgfUserAnnotationToolTipContentUpdatingEventArgsState args) {
    final chart = sender as IgfSeriesViewerState;
    final container = args.content as NativeUIContainer;
    if (container.childrenCount == 0) {
      NativeUIComponent.createComponentSync(chart.dynamicContext,
          NativeUIComponentBuiltInType.external, NativeUIElementFactoryFlavor.none,
          Action$1<Object?>((created) => container.addChild(created as NativeUIComponent)));
    }
    final proxy = container.getChildAt(0)!.nativeElement as IgFlutterExternalProxy;
    proxy.widget = Text(args.annotationInfo?.annotationData ?? '',
        style: const TextStyle(color: Color(0xffffffff)));
  }
  //end eventHandler
}
