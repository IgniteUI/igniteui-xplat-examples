//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridToggleLiveSomePrices
{
    //begin emitterOnly
    // LiveSomePricesDisabled / LiveAllPricesDisabled owned by DataGridToggleLiveAllPrices.
    // IsUpdatingAllPrices/IsUpdatingSomePrices/IsTimerTicking/StartTicking owned by
    // DataGridLiveDataTickerOnViewInit. The handlers merge into one sample class at
    // sample-emission time; these stubs keep the per-handler library Holder compilable.
    public bool LiveSomePricesDisabled = false;
    public bool LiveAllPricesDisabled = false;
    public bool IsUpdatingAllPrices = false;
    public bool IsUpdatingSomePrices = false;
    public bool IsTimerTicking = false;
    public void StartTicking() { }
    //end emitterOnly

    //begin eventHandler
    public void DataGridToggleLiveSomePrices(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        if (this.LiveSomePricesDisabled) return;

        this.IsUpdatingAllPrices = false;
        this.IsUpdatingSomePrices = !this.IsUpdatingSomePrices;

        var liveSomeEditor = CodeGenHelper.FindByName<IgbPropertyEditorPropertyDescription>("LiveSomePricesEditor");

        if (this.IsTimerTicking)
        {
            this.IsTimerTicking = false;
            if (liveSomeEditor != null) liveSomeEditor.PrimitiveValue = "Live Prices";
            this.LiveSomePricesDisabled = false;
            this.LiveAllPricesDisabled = false;
        }
        else
        {
            this.StartTicking();
            if (liveSomeEditor != null) liveSomeEditor.PrimitiveValue = "Stop Prices";
            this.LiveSomePricesDisabled = false;
            this.LiveAllPricesDisabled = true;
        }
    }
    //end eventHandler
}
