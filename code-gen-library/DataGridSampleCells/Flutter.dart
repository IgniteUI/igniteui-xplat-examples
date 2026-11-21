//begin imports
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:igniteui_flutter_core/src/reflection.dart';
import 'package:igniteui_flutter_core/src/IDictionary\$2.dart';
import 'package:igniteui_flutter_core/src/IgfBrush.dart';
import 'package:igniteui_flutter_grid/src/igf-template-cell-updating-event-args.dart';
import 'package:igniteui_flutter_grid/src/igf-data-binding-event-args.dart';
//end imports

//begin supportingTypes
abstract class DataGridSampleCells {
  static const up = Color(0xff4eb862);
  static const down = Color(0xffff134a);
  static const font = TextStyle(fontFamily: 'Verdana', fontSize: 13);

  static Object? value(Object? item, String name) {
    if (item == null) return null;
    if (item is IReflectableData) return item.getValue(name);
    if (item is IReflectable) {
      return item.getValue(name) ??
          item.getValue(name[0].toLowerCase() + name.substring(1));
    }
    if (item is Map) {
      return item[name] ?? item[name[0].toLowerCase() + name.substring(1)];
    }
    if (item is IDictionary$2<String?, Object?>) {
      final lower = name[0].toLowerCase() + name.substring(1);
      return item.containsKey(name) ? item[name] : item.containsKey(lower) ? item[lower] : null;
    }
    throw StateError('Unsupported grid sample row: ${item.runtimeType}');
  }

  static void setValue(Object item, String name, Object? value) {
    if (item is IReflectableData) {
      item.setValue(name, value);
    } else if (item is IReflectableSet) {
      final authored = (item is IReflectable && (item as IReflectable).getValue(name) != null) ||
          (item is IReflectableProperties && (item as IReflectableProperties).propertyNames.contains(name));
      item.setValue(authored ? name : name[0].toLowerCase() + name.substring(1), value);
    } else if (item is Map) {
      final lower = name[0].toLowerCase() + name.substring(1);
      final key = item.containsKey(name) || !item.containsKey(lower) ? name : lower;
      item[key] = value;
    } else if (item is IDictionary$2<String?, Object?>) {
      final lower = name[0].toLowerCase() + name.substring(1);
      final key = item.containsKey(name) || !item.containsKey(lower) ? name : lower;
      item[key] = value;
    } else {
      throw StateError('Grid sample row cannot be updated: ${item.runtimeType}');
    }
  }

  static double number(Object? item, String name) => (value(item, name) as num?)?.toDouble() ?? 0;

  static void price(IgfTemplateCellUpdatingEventArgsState args, {bool arrow = false}) {
    final cell = args.cellInfo!;
    final positive = number(cell.rowItem, 'Change') >= 0;
    final color = positive ? up : down;
    args.content = Align(alignment: Alignment.centerRight,
        child: Text('\$${(cell.value as num).toStringAsFixed(2)}${arrow ? (positive ? ' ↑' : ' ↓') : ''}',
            style: font.copyWith(color: color)));
  }

  static void change(IgfTemplateCellUpdatingEventArgsState args, {bool percent = false}) {
    final value = (args.cellInfo!.value as num).toDouble();
    final color = value >= 0 ? up : down;
    args.content = Align(alignment: Alignment.centerRight,
        child: Container(padding: const EdgeInsets.all(5),
            decoration: BoxDecoration(border: Border(right: BorderSide(color: color, width: 4))),
            child: Text('${value.toStringAsFixed(2)}${percent ? '%' : ''}', style: font)));
  }

  static void heat(IgfDataBindingEventArgsState args, String field, {bool transparent = false, bool enabled = true}) {
    final amount = enabled ? number(args.cellInfo!.rowItem, field).clamp(-1.0, 1.0).toDouble() : 0.0;
    final p = amount.abs();
    final fade = ((1 - p) * 255).round();
    args.cellInfo!.background = IgfSolidColorBrush(Color.fromARGB(
        transparent ? ((1 - .75 * p) * 255).round() : 255,
        amount >= 0 ? fade : 255, amount >= 0 ? 255 : fade, fade));
  }

  static void sales(IgfTemplateCellUpdatingEventArgsState args) {
    final sales = number(args.cellInfo!.rowItem, 'Sales');
    final color = sales < 400000 ? const Color(0xffd31103)
        : sales < 650000 ? const Color(0xffffa500) : const Color(0xff15be06);
    args.content = Padding(padding: const EdgeInsets.symmetric(horizontal: 16),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          SizedBox(height: 6, child: Stack(alignment: Alignment.centerLeft, children: [
            Container(height: 4, color: const Color(0xffdddddd)),
            FractionallySizedBox(widthFactor: (sales / 990000).clamp(0.0, 1.0).toDouble(),
                child: Container(height: 6, color: color))
          ])),
          const SizedBox(height: 2),
          Text('\$${(sales / 1000).floor()},000', style: font.copyWith(color: color))
        ]));
  }

  static void address(IgfTemplateCellUpdatingEventArgsState args) {
    final item = args.cellInfo!.rowItem;
    args.content = Column(mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('${value(item, 'Street')}', style: font),
          Text('${value(item, 'City')}, ${value(item, 'Country')}', style: font)
        ]);
  }

  static void phone(IgfTemplateCellUpdatingEventArgsState args) {
    final phone = value(args.cellInfo!.rowItem, 'Phone')?.toString() ?? '';
    args.content = Center(child: TextButton(
        onPressed: phone.isEmpty ? null : () async {
          final uri = Uri(scheme: 'tel', path: phone);
          if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
            throw StateError('Could not open $uri');
          }
        },
        child: Text(phone, style: font.copyWith(color: const Color(0xff4286f4)))));
  }
}
//end supportingTypes
