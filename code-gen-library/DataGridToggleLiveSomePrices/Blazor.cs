//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridToggleLiveSomePrices
{
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
