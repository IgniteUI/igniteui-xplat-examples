namespace Infragistics.Samples
{
    //begin data
    using System;
	using System.Windows;
	using Infragistics.Win.DataVisualization;
    using System.Collections.Generic;
	using System.Collections.ObjectModel;

    public class TestScatterShapeData9 : ObservableCollection<ValuePoint9>
	{
		public TestScatterShapeData9() {			
			
			var l = new ObservableCollection<Point>();
			l.Add(new Point(10,10));			
			l.Add(new Point(10,40));			
			l.Add(new Point(40,40));			
			l.Add(new Point(40,10));
			this.Add(new ValuePoint9(10,l));
			 l = new ObservableCollection<Point>();
			l.Add(new Point(60,10));			
			l.Add(new Point(60,40));			
			l.Add(new Point(90,40));			
			l.Add(new Point(90,10));
			this.Add(new ValuePoint9(20,l));
			 l = new ObservableCollection<Point>();
			l.Add(new Point(10,60));			
			l.Add(new Point(10,90));			
			l.Add(new Point(40,90));			
			l.Add(new Point(40,60));
			this.Add(new ValuePoint9(30,l));
			
			
		}
	}
	public class ValuePoint9{
		public double Value {get;set;}
		public  ObservableCollection<Point> Points {get;set;}
		public ValuePoint9()
		{
			
		}
		public ValuePoint9(double v, ObservableCollection<Point> l)
		{
			Value = v; Points = l;
		}
	}
    //end data
}