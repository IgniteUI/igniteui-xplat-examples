//begin imports
import 'dart:convert';
import 'package:flutter/widgets.dart' as widgets;
import 'package:igniteui_flutter_charts/src/igf-ring-series.dart';
import 'package:igniteui_flutter_charts/src/PieSliceDataContext.dart';
import 'package:igniteui_flutter_core/src/ChartRelativeToolTipContainer.dart';
import 'package:igniteui_flutter_core/src/ChartToolTipAdapter.dart';
import 'package:igniteui_flutter_core/src/ChartToolTipContent.dart';
import 'package:igniteui_flutter_core/src/CustomContentUpdateInfo.dart';
import 'package:igniteui_flutter_core/src/NativeUIComponent.dart';
import 'package:igniteui_flutter_core/src/NativeUIComponentBuiltInType.dart';
import 'package:igniteui_flutter_core/src/NativeUIElementFactoryFlavor.dart';
import 'package:igniteui_flutter_core/src/NativeUIInputsFactory.dart';
import 'package:igniteui_flutter_core/src/number.dart' show NumberUtil;
import 'package:igniteui_flutter_core/src/JsonDictionaryValue.dart';
import 'package:igniteui_flutter_core/src/proxies.dart' show IgFlutterExternalProxy;
import 'package:igniteui_flutter_core/src/type.dart' show Action$1;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsDoughnutTooltips {
    //begin eventHandler
    //Flutter: Action
    void testsDoughnutTooltips() {
        // SeriesViewer and Legend bootstrap this factory. A standalone doughnut
        // has neither, so initialize the same factory before creating content.
        NativeUIInputsFactory.register();
        final data = CodeGenHelper.findByName<JsonDictionaryValue>('TestsDoughnutTooltipBindings');
        final json = data?.value as String?;
        if (json == null) throw StateError('Doughnut tooltip bindings were not provided');
        final bindings = jsonDecode(json) as Map<String, dynamic>;
        for (final entry in bindings.entries) {
            final series = CodeGenHelper.findByName<IgfRingSeriesState>(entry.key);
            if (series == null) throw StateError('Missing tooltip series: ${entry.key}');
            if (entry.value == null) {
                series.i_IgfRingSeriesBase.toolTip = null;
                continue;
            }
            final member = entry.value as String;
            if (member != 'Value' && member != 'Label') throw StateError('Unsupported tooltip member: $member');
            final context = series.chart?.dynamicContext;
            if (context == null) throw StateError('Tooltip series has no chart context: ${entry.key}');
            final adapter = ChartToolTipAdapter(series);
            adapter.viewUpdating = (Object? sender, Object? currentData,
                    NativeUIComponent? currentView, CustomContentUpdateInfo? info) {
                final data = currentData as PieSliceDataContext;
                final Object? value = member == 'Label' ? data.itemLabel :
                    (data.item as dynamic)[series.valueMemberPath];
                final text = value is double ? NumberUtil.doubleToMinDecimalsString(value) ?? '' : value?.toString() ?? '';
                final widget = widgets.Text(text);
                final existing = currentView?.nativeElement;
                if (existing is IgFlutterExternalProxy) {
                    existing.widget = widget;
                    return currentView;
                }
                NativeUIComponent? created;
                NativeUIComponent.createComponentSync(context, NativeUIComponentBuiltInType.external,
                    NativeUIElementFactoryFlavor.none, Action$1((Object? c) { created = c as NativeUIComponent?; }));
                final proxy = created?.nativeElement;
                if (proxy is! IgFlutterExternalProxy) throw StateError('Tooltip content has no widget proxy');
                proxy.widget = widget;
                return created;
            };
            final container = ChartRelativeToolTipContainer(context);
            container.addChildContent(ChartToolTipContent(adapter));
            series.i_IgfRingSeriesBase.toolTip = container;
        }
    }
    //end eventHandler
}
