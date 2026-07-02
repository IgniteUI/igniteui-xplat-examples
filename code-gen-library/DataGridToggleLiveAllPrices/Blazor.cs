//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridToggleLiveAllPrices
{
    public bool LiveAllPricesDisabled = false;
    public bool LiveSomePricesDisabled = false;

    //begin eventHandler
    public void DataGridToggleLiveAllPrices(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        if (LiveAllPricesDisabled) return;

        this.IsUpdatingAllPrices = !this.IsUpdatingAllPrices;
        this.IsUpdatingSomePrices = false;

        var liveAllEditor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("LiveAllPricesEditor");
        var liveSomeEditor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("LiveSomePricesEditor");

        if (this.IsTimerTicking)
        {
            this.IsTimerTicking = false;
            if (liveAllEditor != null) liveAllEditor.PrimitiveValue = "Live All Prices";
            LiveAllPricesDisabled = false;
            LiveSomePricesDisabled = false;
        }
        else
        {
            this.StartTicking();
            if (liveAllEditor != null) liveAllEditor.PrimitiveValue = "Stop All Prices";
            LiveAllPricesDisabled = false;
            LiveSomePricesDisabled = true;
        }
    }
    //end eventHandler
}
