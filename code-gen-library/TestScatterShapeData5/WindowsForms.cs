namespace Infragistics.Samples
{
    //begin data
    using System;
	using System.Windows;
	using Infragistics.Win.DataVisualization;
    using System.Collections.Generic;

   public class TestScatterShapeData5 : List<ValuePoint5>
	{
		public TestScatterShapeData5() {			
			
			var l = new List<Point>();			 
			 l.Add(new Point(10,10));
			 l.Add(new Point(10,20));
			 l.Add(new Point(20,20));
			 l.Add(new Point(20,10));
			 this.Add(new ValuePoint5(5,l));
			 l = new List<Point>();	
			 l.Add(new Point(-10,-10));
			 l.Add(new Point(-10,-20));
			 l.Add(new Point(-20,-20));
			 l.Add(new Point(-20,-10)); 
			this.Add(new ValuePoint5(10,l));
				
			
		}
	}
	public class ValuePoint5{
		public double Value {get;set;}
		public  List<Point> Points { get;set;}
		public ValuePoint5(double v, List<Point> l)
		{
			Value = v; Points = l;
		}
	}
    //end data
}