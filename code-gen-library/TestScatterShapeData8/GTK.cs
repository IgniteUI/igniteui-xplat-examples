namespace Infragistics.Samples
{
    //begin data
    using System;
	using Infragistics.Core;
    using System.Collections.Generic;

    public class TestScatterShapeData8 : List<List<Point>>
	{
		public TestScatterShapeData8() {			
			
			var l = new List<Point>();
			l.Add(new Point(10,10));			
			l.Add(new Point(10,40));			
			l.Add(new Point(40,40));			
			l.Add(new Point(40,10));
			this.Add(l);
			 l = new List<Point>();
			l.Add(new Point(60,10));			
			l.Add(new Point(60,40));			
			l.Add(new Point(90,40));			
			l.Add(new Point(90,10));
			this.Add(l);
			 l = new List<Point>();
			l.Add(new Point(10,60));			
			l.Add(new Point(10,90));			
			l.Add(new Point(40,90));			
			l.Add(new Point(40,60));
			this.Add(l);
			 l = new List<Point>();
			l.Add(new Point(60,60));			
			l.Add(new Point(60,90));			
			l.Add(new Point(90,90));			
			l.Add(new Point(90,60));
			this.Add(l);
						
		}
	}
	
    //end data
}