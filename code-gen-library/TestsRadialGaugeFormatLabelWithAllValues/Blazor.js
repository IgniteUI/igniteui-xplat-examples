igRegisterScript("TestsRadialGaugeFormatLabelWithAllValues", (sender, args) => {
    const radToDeg = 180 / Math.PI
    const angleDeg      = roundToEven(args.angle * radToDeg);
    const startAngleDeg = roundToEven(args.startAngle * radToDeg);
    const endAngleDeg   = roundToEven(args.endAngle * radToDeg);

    args.label =
      `Value:${args.value},` +
      `Angle:${angleDeg},` +
      `StartAngle:${startAngleDeg},` +
      `EndAngle:${endAngleDeg},` +
      `ActualMinimumValue:${args.actualMinimumValue},` +
      `ActualMaximumValue:${args.actualMaximumValue}`;
}, false);

// Web.ts kept roundToEven as a private method; a registered script has no instance, so it is hoisted
// to a top-level function and called directly.
function roundToEven(n) {
    const f = Math.floor(n);
    const frac = n - f;

    // Handle ties (~ 0.5) robustly despite FP error
    if (Math.abs(frac - 0.5) < 1e-12) {
        return (f % 2 === 0) ? f : f + 1;
    }
    return Math.round(n);
}
