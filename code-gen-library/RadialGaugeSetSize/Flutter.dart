//begin imports
import 'package:flutter/rendering.dart' show RenderBox;
import 'package:igniteui_flutter_core/src/IgfComponentRendererContainer.dart'
    show IgfComponentRendererContainerViewState;
import 'package:igniteui_flutter_gauges/src/igf-radial-gauge.dart'
    show IgfRadialGaugeState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart'
    show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'libraryManager.dart' show CodeGenHelper;
//end imports

class RadialGaugeSetSize {
  //begin eventHandler
  void radialGaugeSetSize(Object? sender,
      IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
    final gauge =
        CodeGenHelper.getDescription('content') as IgfRadialGaugeState;
    final state = gauge.i_contextHost ?? gauge;
    final container = state.context
        .findAncestorStateOfType<IgfComponentRendererContainerViewState>()!;
    // Measure the allocation outside the renderer container: the component
    // itself already has the previous percentage applied to its size.
    final allocation =
        container.context.findAncestorRenderObjectOfType<RenderBox>()!.size;
    final fraction = (args.newValue as num).toDouble().clamp(0.0, 100.0) / 100;
    gauge.width = allocation.width * fraction;
    gauge.height = allocation.height * fraction;
  }
  //end eventHandler
}
