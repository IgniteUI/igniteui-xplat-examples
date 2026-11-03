namespace Infragistics.Samples
{
    //begin data
    using System;
	using Infragistics.Core;
	using System.Collections.Generic;

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
		public  List<Point> Points { get;set;}
		public ValuePoint7(double v, List<Point> l)
		{
			Value = v; Points = l;
		}
	}
    //end data
}