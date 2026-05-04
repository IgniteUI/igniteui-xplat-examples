namespace Infragistics.Samples
{
    //begin data
    using System;
	using System.Windows;
	using Infragistics.Win.DataVisualization;
	using System.Collections.Generic;

    public class TestScatterShapeData4 : List<ValuePoint4>
	{
		public TestScatterShapeData4() {			
			
			var l = new List<Point>();			 
			 l.Add(new Point(40,40));
			 l.Add(new Point(40,60));
			 l.Add(new Point(60,60));
			 l.Add(new Point(60,40));
			 this.Add(new ValuePoint4(5,l));
			  l = new List<Point>();	
			 l.Add(new Point(50,50));
			 l.Add(new Point(50,70));
			 l.Add(new Point(70,70));
			 l.Add(new Point(70,50)); 
			this.Add(new ValuePoint4(10,l));
				
			
		}
	}
	public class ValuePoint4{
		public double Value {get;set;}
		public  List<Point> Points { get;set;}
		public ValuePoint4(double v, List<Point> l)
		{
			Value = v; Points = l;
		}
	}
    //end data
}