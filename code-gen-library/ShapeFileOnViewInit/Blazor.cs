//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
using System.Collections;
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

public class ShapeFileOnViewInit
{
    //begin eventHandler
	
    private IgbShapeDataSource Data;

    public void ShapeFileOnViewInit()
	{
		var geoMap = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
		var geographicShapeSeries1 = CodeGenHelper.GetDescription<IgbGeographicShapeSeries>("geographicShapeSeries1");

		this.Data = new IgbShapeDataSource()
		{
			ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp",
			DatabaseSource  = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf"
		};
		geographicShapeSeries1.ShapefileDataSource = Data;
		geoMap.BackgroundContent = null;
	}
    //end eventHandler
}