namespace Infragistics.Samples
{
    //begin data
    using System;
	using System.Windows;
	using Infragistics.Win.DataVisualization;
    using System.Collections.Generic;

    public class TestScatterShapeData2 : List<ValuePoint2>
	{
		public TestScatterShapeData2() {			
			
			var l = new List<Point>();
			l.Add(new Point(10,10));			
			l.Add(new Point(10,40));			
			l.Add(new Point(40,40));			
			l.Add(new Point(40,10));
			this.Add(new ValuePoint2(10,l));
			 l = new List<Point>();
			l.Add(new Point(60,10));			
			l.Add(new Point(60,40));			
			l.Add(new Point(90,40));			
			l.Add(new Point(90,10));
			this.Add(new ValuePoint2(20,l));
			 l = new List<Point>();
			l.Add(new Point(10,60));			
			l.Add(new Point(10,90));			
			l.Add(new Point(40,90));			
			l.Add(new Point(40,60));
			this.Add(new ValuePoint2(30,l));
			 l = new List<Point>();
			l.Add(new Point(60,60));			
			l.Add(new Point(60,90));			
			l.Add(new Point(90,90));			
			l.Add(new Point(90,60));
			this.Add(new ValuePoint2(40,l));
			
		}
	}
	public class ValuePoint2{
		public double Value {get;set;}
		public  List<Point> Points {get;set;}
		public ValuePoint2(double v, List<Point> l)
		{
			Value = v; Points = l;
		}
	}
    //end data
}