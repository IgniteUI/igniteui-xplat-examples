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
		var geoMap = CodeGenHelper.GetDescription<IgbGeoGraphicMap>("content");

		this.Data = new IgbShapeDataSource()
		{
			ShapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp",
			DatabaseSource  = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf"
		};
		this.geographicShapeSeries1.ShapefileDataSource = Data;
		this.geoMap.BackgroundContent = null;
	}
    //end eventHandler
}