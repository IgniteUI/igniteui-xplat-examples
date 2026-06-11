//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class DataGridToggleLiveAllPrices
{
    //begin eventHandler
    // IsUpdatingAllPrices, IsUpdatingSomePrices, IsTimerTicking and StartTicking
    // are owned by DataGridLiveDataTickerOnViewInit; these handlers are merged
    // into one sample class and only ever used together.
    public bool LiveAllPricesDisabled = false;
    public bool LiveSomePricesDisabled = false;

    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridToggleLiveAllPrices(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        if (LiveAllPricesDisabled) return;

        this.IsUpdatingAllPrices = !this.IsUpdatingAllPrices;
        this.IsUpdatingSomePrices = false;

        var liveAllEditor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("LiveAllPricesEditor");
        var liveSomeEditor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("LiveSomePricesEditor");

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
