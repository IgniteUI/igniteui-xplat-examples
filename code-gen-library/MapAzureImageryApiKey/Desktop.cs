//begin imports
//end imports

//begin supportingTypes
/// <summary>
/// The Azure Maps key typed into the property editor, held until the Set Key button applies it.
///
/// The text box and the button are separate editors with separate handlers, so the value has to
/// live somewhere both can reach. Applying the key on every keystroke would send tile requests with
/// partial keys, which is why the text box only records it here.
/// </summary>
public class MapAzureImageryApiKey
{
    public string Key { get; set; } = "";
}
//end supportingTypes
