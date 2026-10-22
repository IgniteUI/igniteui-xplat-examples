namespace Infragistics.Samples
{
    //begin data
    using System;
	using System.Windows;
	using System.Collections.Generic;
    using IgniteUI.Blazor.Controls;

    public class TestScatterShapeData7 : List<ValuePoint7>
	{
		public TestScatterShapeData7() {

			var l = new List<Point>();
			 l.Add(new Point(-40,20));
			 l.Add(new Point(-40,40));
			l.Add(new Point(40,40));
			l.Add(new Point(40,20));
			 l.Add(new Point(-40,20));
			 this.Add(new ValuePoint7(10,l));
			 l = new List<Point>();
			 l.Add(new Point(-40,-10));
			 l.Add(new Point(-40,10));
			 l.Add(new Point(40,10));
			 l.Add(new Point(40,-10));
			 l.Add(new Point(-40,-10));
			this.Add(new ValuePoint7(20,l));
			 l = new List<Point>();
			l.Add(new Point(-40, -20));
			 l.Add(new Point(-40,-40));
			 l.Add(new Point(40,-40));
			 l.Add(new Point(40,-20));
			 l.Add(new Point(-40,-20));
			this.Add(new ValuePoint7(30,l));

		}
	}
	public class ValuePoint7{
		public double Value {get;set;}
		public  List<List<Point>> Points { get;set;}
		public ValuePoint7(double v, List<Point> l)
		{
			Value = v; Points = new List<List<Point>>(); Points.Add(l);
		}
	}
    //end data
}
