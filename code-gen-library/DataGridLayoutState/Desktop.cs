//begin imports
//end imports

//begin supportingTypes
/// <summary>
/// The layout the save button stores and the load button restores. The two handlers are separate
/// items, so the value they share is a supporting item each asks for, rather than a field each
/// declares and a sample that uses both would declare twice.
/// </summary>
public class DataGridLayoutState
{
    public string SavedLayout = "";
}
//end supportingTypes
