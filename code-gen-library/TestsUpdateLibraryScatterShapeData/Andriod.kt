//begin imports
import com.infragistics.mobile.controls.JsonDictionaryArray
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import java.lang.reflect.ParameterizedType
//end imports

public class TestsUpdateLibraryScatterShapeData {

    //begin eventHandler
    //Kotlin: (MutableList<Any?>, JsonDictionaryObject) -> Any?
    public fun testsUpdateLibraryScatterShapeData(origData: MutableList<Any?>, options: JsonDictionaryObject): Any? {
        val updateType = stringValue(options["updateType"]) ?: ""

        return when (updateType) {
            "addItems" -> addItems(origData, options["newData"])
            "removeItems" -> removeItems(origData, options["indexes"])
            else -> null
        }
    }

    private fun removeItems(origData: MutableList<Any?>, itemsToRemove: Any?): Any? {
        if (itemsToRemove is JsonDictionaryArray) {
            for (item in itemsToRemove.items ?: emptyArray()) {
                val index = intValue(item)
                if (index != null && index >= 0 && index < origData.size) {
                    origData.removeAt(index)
                }
            }
        } else {
            val index = intValue(itemsToRemove)
            if (index != null && index >= 0 && index < origData.size) {
                origData.removeAt(index)
            }
        }

        return origData
    }

    private fun addItems(origData: MutableList<Any?>, newData: Any?): Any? {
        val elementType = getElementType(origData)

        if (newData is JsonDictionaryArray) {
            for (item in newData.items ?: emptyArray()) {
                if (item is JsonDictionaryObject) {
                    getTypedObject(item, elementType)?.let { origData.add(it) }
                }
            }
        } else if (newData is JsonDictionaryObject) {
            getTypedObject(newData, elementType)?.let { origData.add(it) }
        }

        return origData
    }

    private fun getElementType(list: MutableList<Any?>): Class<*>? {
        val first = list.firstOrNull { it != null }
        if (first != null) {
            return first.javaClass
        }

        val superType = list.javaClass.genericSuperclass
        if (superType is ParameterizedType) {
            val arg = superType.actualTypeArguments.firstOrNull()
            if (arg is Class<*>) {
                return arg
            }
        }

        for (iface in list.javaClass.genericInterfaces) {
            if (iface is ParameterizedType) {
                val arg = iface.actualTypeArguments.firstOrNull()
                if (arg is Class<*>) {
                    return arg
                }
            }
        }

        return null
    }

    private fun getTypedObject(jObject: JsonDictionaryObject, targetType: Class<*>?): Any? {
        if (targetType == null || java.util.Map::class.java.isAssignableFrom(targetType)) {
            return createMapObject(jObject)
        }

        val ret = tryCreateInstance(targetType) ?: return createMapObject(jObject)

        for (key in jObject.getKeys() ?: emptyArray<String?>()) {
            if (key == null) {
                continue
            }

            if (key == "Points") {
                val pointCollection = createPointsCollection(ret, key, jObject[key] as? JsonDictionaryArray)
                setMemberValue(ret, key, pointCollection)
            } else {
                numberValue(jObject[key])?.let { value ->
                    setMemberValue(ret, key, value)
                }
            }
        }

        return ret
    }

    private fun createMapObject(jObject: JsonDictionaryObject): MutableMap<String, Any?> {
        val ret = mutableMapOf<String, Any?>()

        for (key in jObject.getKeys() ?: emptyArray<String?>()) {
            if (key == null) {
                continue
            }

            ret[key] = if (key == "Points") {
                createMapPointsCollection(jObject[key] as? JsonDictionaryArray)
            } else {
                numberValue(jObject[key])
            }
        }

        return ret
    }

    private fun createMapPointsCollection(pointsArray: JsonDictionaryArray?): MutableList<Any?> {
        val points = mutableListOf<Any?>()
        for (item in pointsArray?.items ?: emptyArray()) {
            val pointObject = item as? JsonDictionaryObject ?: continue
            val x = numberValue(pointObject["X"]) ?: 0.0
            val y = numberValue(pointObject["Y"]) ?: 0.0
            points.add(mutableMapOf<String, Double>("X" to x, "Y" to y))
        }
        return points
    }

    private fun createPointsCollection(target: Any, key: String, pointsArray: JsonDictionaryArray?): MutableList<Any?> {
        val points = mutableListOf<Any?>()
        val pointType = getCollectionElementType(target, key)

        for (item in pointsArray?.items ?: emptyArray()) {
            val pointObject = item as? JsonDictionaryObject ?: continue
            val x = numberValue(pointObject["X"]) ?: 0.0
            val y = numberValue(pointObject["Y"]) ?: 0.0
            points.add(createPointValue(pointType, x, y))
        }

        return points
    }

    private fun createPointValue(pointType: Class<*>?, x: Double, y: Double): Any {
        if (pointType != null) {
            val point = tryCreateInstance(pointType)
            if (point != null) {
                setMemberValue(point, "X", x)
                setMemberValue(point, "Y", y)
                return point
            }
        }

        return mutableMapOf<String, Double>("X" to x, "Y" to y)
    }

    private fun getCollectionElementType(target: Any, key: String): Class<*>? {
        val setter = target.javaClass.methods.firstOrNull {
            it.name.equals("set$key", ignoreCase = true) && it.parameterCount == 1
        }
        val setterType = setter?.genericParameterTypes?.firstOrNull()
        if (setterType is ParameterizedType) {
            val arg = setterType.actualTypeArguments.firstOrNull()
            if (arg is Class<*>) {
                return arg
            }
        }

        val field = target.javaClass.declaredFields.firstOrNull { it.name.equals(key, ignoreCase = true) }
        val fieldType = field?.genericType
        if (fieldType is ParameterizedType) {
            val arg = fieldType.actualTypeArguments.firstOrNull()
            if (arg is Class<*>) {
                return arg
            }
        }

        return null
    }

    private fun setMemberValue(target: Any, key: String, value: Any?) {
        if (target is MutableMap<*, *>) {
            @Suppress("UNCHECKED_CAST")
            (target as MutableMap<String, Any?>)[key] = value
            return
        }

        val setter = target.javaClass.methods.firstOrNull {
            it.name.equals("set$key", ignoreCase = true) && it.parameterCount == 1
        }
        if (setter != null) {
            val converted = convertValue(value, setter.parameterTypes[0])
            setter.invoke(target, converted)
            return
        }

        val field = target.javaClass.declaredFields.firstOrNull { it.name.equals(key, ignoreCase = true) }
        if (field != null) {
            field.isAccessible = true
            val converted = convertValue(value, field.type)
            field.set(target, converted)
        }
    }

    private fun convertValue(value: Any?, targetType: Class<*>): Any? {
        if (value == null) {
            return null
        }

        if (Number::class.java.isAssignableFrom(targetType) || targetType.isPrimitive) {
            val number = value as? Number ?: return value
            return when (targetType) {
                java.lang.Integer.TYPE, java.lang.Integer::class.java -> number.toInt()
                java.lang.Long.TYPE, java.lang.Long::class.java -> number.toLong()
                java.lang.Float.TYPE, java.lang.Float::class.java -> number.toFloat()
                java.lang.Short.TYPE, java.lang.Short::class.java -> number.toShort()
                java.lang.Byte.TYPE, java.lang.Byte::class.java -> number.toByte()
                else -> number.toDouble()
            }
        }

        return value
    }

    private fun tryCreateInstance(type: Class<*>): Any? {
        return try {
            val ctor = type.getDeclaredConstructor()
            ctor.isAccessible = true
            ctor.newInstance()
        } catch (_: Exception) {
            null
        }
    }

    private fun stringValue(value: Any?): String? {
        return when (value) {
            is JsonDictionaryValue -> when (val actualValue = value.value) {
                is String -> actualValue
                is Number -> actualValue.toString()
                else -> null
            }

            is String -> value
            is Number -> value.toString()
            else -> null
        }
    }

    private fun numberValue(value: Any?): Double? {
        return when (value) {
            is JsonDictionaryValue -> when (val actualValue = value.value) {
                is Number -> actualValue.toDouble()
                is String -> actualValue.toDoubleOrNull()
                else -> null
            }

            is Number -> value.toDouble()
            is String -> value.toDoubleOrNull()
            else -> null
        }
    }

    private fun intValue(value: Any?): Int? {
        return numberValue(value)?.toInt()
    }
    //end eventHandler
}
