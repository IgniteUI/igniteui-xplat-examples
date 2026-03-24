//begin imports
using Infragistics.Controls;
using Infragistics.Core;
using System.Collections;
using System.Collections.ObjectModel;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Infragistics;
using Infragistics.Portable;
using System.Reflection;
//end imports


public class TestsUpdateLibraryScatterShapeData
{

	//begin eventHandler
	//WPF: System.Func<IList, JObject, object>
	  FastReflectionHelper helper = new FastReflectionHelper();
    public object TestsUpdateLibraryScatterShapeData(IList origData, JObject options)
	{
		string updateType = options.Value<string>("updateType");

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

	private object RemoveItems(IList origData, JToken itemsToRemove)
	{
		var elementType = GetElementType(origData);
		if (itemsToRemove is JArray jArray)
		{
				var indexes = itemsToRemove.ToObject<List<int>>();
				foreach (var index in indexes)
				{
						origData.RemoveAt(index);
				}
		}
		else if (itemsToRemove is JObject jObject)
		{
				var index = itemsToRemove.ToObject<int>();
				origData.RemoveAt(index);
		}
		return origData;
	}

	private object AddItems(IList origData, JToken newData)
	{
		var elementType = GetElementType(origData);

		if (newData is JArray jArray)
		{
				foreach (JObject item in jArray.OfType<JObject>())
				{

						origData.Add(GetTypedObject(item, elementType));
				}
		}
		else if (newData is JObject jObject)
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

	private object GetTypedObject(JObject jObject, Type targetType)
	{
		object ret = Activator.CreateInstance(targetType);
		var keys = jObject.Properties();

		foreach (var key in keys)
		{
			helper.PropertyName = key.Name;
			if (helper.Invalid)
				continue;

			if (key.Name == "Points")
			{
				var points = new ObservableCollection<Point>();
				var pArr = jObject["Points"] as JArray;
				foreach (var pItem in pArr)
				{
					JObject pObj = pItem as JObject;
					var p = new Point(pObj.Value<double>("X"), pObj.Value<double>("Y"));
					points.Add(p);
				}
				PropertyInfo info = ret.GetType().GetProperty("Points");
				info.SetValue(ret, points);
			}
			else
			{
				PropertyInfo info = ret.GetType().GetProperty(key.Name);
				info.SetValue(ret, Convert.ChangeType(key.Value.ToString(), info.PropertyType));
			}

		}
		return ret;
	}
    //end eventHandler
}
