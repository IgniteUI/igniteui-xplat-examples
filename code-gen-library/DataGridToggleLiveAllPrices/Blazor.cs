//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridToggleLiveAllPrices
{
    //begin emitterOnly
    // IsUpdatingAllPrices/IsUpdatingSomePrices/IsTimerTicking/StartTicking are owned by
    // DataGridLiveDataTickerOnViewInit. The handlers merge into one sample class at
    // sample-emission time; these stubs keep the per-handler library Holder compilable
    // in isolation.
    public bool IsUpdatingAllPrices = false;
    public bool IsUpdatingSomePrices = false;
    public bool IsTimerTicking = false;
    public void StartTicking() { }
    //end emitterOnly


    //begin eventHandler
    public bool LiveAllPricesDisabled = false;
    public bool LiveSomePricesDisabled = false;
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
