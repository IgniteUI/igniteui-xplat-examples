namespace Infragistics.Samples
{
    //begin data
    // NOTE: Modeled on Web.ts (per guidance to defer to the web version when the platform sources
    // disagree). The WPF/GTK/WinUI/WinForms versions of TestScatterShapeData8 use a DIFFERENT shape:
    // a bare List<List<Point>> of 4 rectangles (coords 10..90, no Points member). Web.ts instead has a
    // SINGLE item whose Points property holds 3 shapes (coords -40..40). This Blazor version matches
    // Web.ts so the JS shape series renders. If the test that consumes TestScatterShapeData8 asserts
    // against the WPF (4-rectangle) data, revisit this entry.
    using System;
	using System.Windows;
    using System.Collections.Generic;
    using IgniteUI.Blazor.Controls;

    public class TestScatterShapeData8 : List<ValuePoint8>
	{
		public TestScatterShapeData8() {

			var shapes = new List<List<Point>>();

			var l = new List<Point>();
			l.Add(new Point(-40,20));
			l.Add(new Point(-40,40));
			l.Add(new Point(40,40));
			l.Add(new Point(40,20));
			l.Add(new Point(-40,20));
			shapes.Add(l);

			l = new List<Point>();
			l.Add(new Point(-40,-10));
			l.Add(new Point(-40,10));
			l.Add(new Point(40,10));
			l.Add(new Point(40,-10));
			l.Add(new Point(-40,-10));
			shapes.Add(l);

			l = new List<Point>();
			l.Add(new Point(-40,-20));
			l.Add(new Point(-40,-40));
			l.Add(new Point(40,-40));
			l.Add(new Point(40,-20));
			l.Add(new Point(-40,-20));
			shapes.Add(l);

			this.Add(new ValuePoint8(shapes));

		}
	}
	public class ValuePoint8{
		public  List<List<Point>> Points { get;set;}
		public ValuePoint8(List<List<Point>> shapes)
		{
			Points = shapes;
		}
	}
    //end data
}
