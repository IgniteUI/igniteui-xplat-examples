//begin imports
import 'package:flutter/material.dart';
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart';
import 'package:igniteui_flutter_charts/src/igf-user-annotation-information-event-args.dart';
import 'package:igniteui_flutter_core/src/IgfBrush.dart';
//end imports

class DataChartUserAnnotationRequested {
  //begin eventHandler
  void dataChartUserAnnotationRequested(
      Object? sender, IgfUserAnnotationInformationEventArgsState args) {
    final chart = sender as IgfDataChartState;
    final info = args.annotationInfo;
    if (info == null) throw StateError('The chart supplied no annotation information.');
    var label = info.label ?? 'Enter Label';
    var details = info.annotationData ?? 'Enter Details';
    var badge = '#000000';
    var main = '#000000';
    final form = GlobalKey<FormState>();
    String? validateColor(String? value) =>
        RegExp(r'^#[0-9a-fA-F]{6}$').hasMatch(value ?? '') ? null : 'Use #RRGGBB';
    showDialog<bool>(context: chart.context, builder: (context) => AlertDialog(
      title: const Text('Annotation'),
      content: SizedBox(width: 260, child: SingleChildScrollView(child: Form(key: form,
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          TextFormField(initialValue: label, decoration: const InputDecoration(labelText: 'Label'),
              onChanged: (value) => label = value),
          TextFormField(initialValue: details, maxLines: 3,
              decoration: const InputDecoration(labelText: 'Details'), onChanged: (value) => details = value),
          TextFormField(initialValue: badge, decoration: const InputDecoration(labelText: 'Badge Color'),
              validator: validateColor, onChanged: (value) => badge = value),
          TextFormField(initialValue: main, decoration: const InputDecoration(labelText: 'Main Color'),
              validator: validateColor, onChanged: (value) => main = value),
        ])))),
      actions: [
        TextButton(onPressed: () => Navigator.of(context).pop(false), child: const Text('Cancel')),
        TextButton(onPressed: () {
          if (form.currentState!.validate()) Navigator.of(context).pop(true);
        }, child: const Text('Done')),
      ],
    )).then((accepted) {
      if (!chart.mounted) return;
      if (accepted == true) {
        info.label = label;
        info.annotationData = details;
        info.badgeColor = IgfSolidColorBrush.fromString(badge);
        info.mainColor = IgfSolidColorBrush.fromString(main);
        chart.finishAnnotationFlow(info);
      } else if (info.annotationId != null) {
        chart.cancelAnnotationFlow(info.annotationId);
      }
    });
  }
  //end eventHandler
}
