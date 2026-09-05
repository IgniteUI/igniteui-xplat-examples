//begin imports
using Infragistics.Controls;
using Infragistics.Core;
using System.Collections;
using System.Collections.ObjectModel;
using Infragistics.Portable.Description;
using Infragistics.Portable;
using System.Reflection;
//end imports


public class TestsUpdateLibraryScatterShapeData
{

	//begin eventHandler
	//WinUI: System.Func<IList, JsonDictionaryObject, object>
	  FastReflectionHelper helper = new FastReflectionHelper();
    JsonDictionaryParser parser = new JsonDictionaryParser();
    public object TestsUpdateLibraryScatterShapeData(IList origData, JsonDictionaryObject options)
	{
		string updateType = options.GetString("updateType");

		switch(updateType)
		{
				case "addItems":
							return AddItems(origData,options["newData"]);
						break;
			case "removeItems":
						return RemoveItems(origData, options["indexes"]);
						break;

		}
		return null;
	}

	private object RemoveItems(IList origData, object itemsToRemove)
	{
		var elementType = GetElementType(origData);
		if (itemsToRemove is JsonDictionaryArray jArray)
		{
				foreach (JsonDictionaryValue item in jArray.Items)
				{
						var index = int.Parse(item.Value.ToString());
						origData.RemoveAt((int) index);
				}
		}
		else if (itemsToRemove is JsonDictionaryValue jItem)
		{
			var index = int.Parse(jItem.Value.ToString());
			origData.RemoveAt((int)index);
		}
		return origData;
	}

	private object AddItems(IList origData, object newData)
	{
		var elementType = GetElementType(origData);

		if (newData is JsonDictionaryArray jArray)
		{
				foreach (JsonDictionaryObject item in jArray.Items)
				{

						origData.Add(GetTypedObject(item, elementType));
				}
		}
		else if (newData is JsonDictionaryObject jObject)
		{
				origData.Add(GetTypedObject(jObject, elementType));
		}

		return origData;
	}

	private Type GetElementType(IList list)
	{
		if (list.Count > 0 && list[0] != null)
		{
			return list[0].GetType();
		}

		var listType = list.GetType();
		if (listType.IsGenericType)
		{
			var args = listType.GetGenericArguments();
			if (args.Length > 0)
			{
				return args[0];
			}
		}

		return typeof(object);
	}

	private object GetTypedObject(JsonDictionaryObject jObject, Type targetType)
	{
		object ret = Activator.CreateInstance(targetType);
		var keys = jObject.GetKeys();

		foreach (var key in keys)
		{
			helper.PropertyName = key;
			if (helper.Invalid)
				continue;

			if (key == "Points")
			{
				var points = new ObservableCollection<Point>();
				var pArr = jObject["Points"] as JsonDictionaryArray;
				foreach (var pItem in pArr.Items)
				{
					var pObj = pItem as JsonDictionaryObject;
					var p = new Point(pObj.GetNumber("X"), pObj.GetNumber("Y"));
					points.Add(p);
				}
				PropertyInfo info = ret.GetType().GetProperty("Points");
				info.SetValue(ret, points);
			}
			else
			{
				PropertyInfo info = ret.GetType().GetProperty(key);
				info.SetValue(ret, jObject.GetNumber(key));
			}

		}
		return ret;
	}
    //end eventHandler
}
