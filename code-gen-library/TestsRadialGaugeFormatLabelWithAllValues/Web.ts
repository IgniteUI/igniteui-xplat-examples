//begin imports
import { FormatRadialGaugeLabelEventArgs } from 'igniteui-webcomponents-gauges';

//end imports

export class TestsRadialGaugeFormatLabelWithAllValues
{
    
    //begin eventHandler
	
	

    public testsRadialGaugeFormatLabelWithAllValues(sender: any,args: FormatRadialGaugeLabelEventArgs)
    {		
		const radToDeg = 180 / Math.PI
		const angleDeg      = this.roundToEven(args.angle * radToDeg);
		const startAngleDeg = this.roundToEven(args.startAngle * radToDeg);
		const endAngleDeg   = this.roundToEven(args.endAngle * radToDeg);

		args.label =
		  `Value:${args.value},` +
		  `Angle:${angleDeg},` +
		  `StartAngle:${startAngleDeg},` +
		  `EndAngle:${endAngleDeg},` +
		  `ActualMinimumValue:${args.actualMinimumValue},` +
		  `ActualMaximumValue:${args.actualMaximumValue}`;

			
    }
	private roundToEven(n: number): number {
	  const f = Math.floor(n);
	  const frac = n - f;

	  // Handle ties (≈ 0.5) robustly despite FP error
	  if (Math.abs(frac - 0.5) < 1e-12) {
		return (f % 2 === 0) ? f : f + 1;
	  }
	  return Math.round(n);
	}
	
	

    //end eventHandler
}