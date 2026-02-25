namespace Infragistics.Samples
{
    //begin data
    using System;
	using System.Windows;
	using Infragistics.Win.DataVisualization;
    using System.Collections.Generic;

    public class TestScatterShapeData6 : List<ValuePoint6>
	{
		public TestScatterShapeData6() {			
			
			var l = new List<Point>();			 
			 l.Add(new Point(40,40));
			 l.Add(new Point(40,80));
			 l.Add(new Point(90,80));
			 l.Add(new Point(90,40));
			 this.Add(new ValuePoint6(50,l));
			  l = new List<Point>();	
			 l.Add(new Point(40,-80));
			 l.Add(new Point(40,-40));
			 l.Add(new Point(90,-40));
			 l.Add(new Point(90,-80)); 
			this.Add(new ValuePoint6(50,l));
			  l = new List<Point>();	
			 l.Add(new Point(-90,40));
			 l.Add(new Point(-90,80));
			 l.Add(new Point(-40,80));
			 l.Add(new Point(-40,40)); 
			this.Add(new ValuePoint6(10,l));
				 l = new List<Point>();	
			 l.Add(new Point(-90,-80));
			 l.Add(new Point(-90,-40));
			 l.Add(new Point(-40,-40));
			 l.Add(new Point(-40,-80)); 
			this.Add(new ValuePoint6(10,l));
			
		}
	}
	public class ValuePoint6{
		public double Value {get;set;}
		public  List<Point> Locations { get;set;}
		public ValuePoint6(double v, List<Point> l)
		{
			Value = v; Locations = l;
		}
	}
    //end data
}