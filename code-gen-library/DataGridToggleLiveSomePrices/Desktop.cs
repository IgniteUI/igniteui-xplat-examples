//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class DataGridToggleLiveSomePrices
{
    //begin eventHandler
    public bool LiveSomePricesDisabled = false;
    public bool LiveAllPricesDisabled = false;
    public bool IsUpdatingAllPrices = false;
    public bool IsUpdatingSomePrices = false;
    public bool IsTimerTicking = false;

    public void StartTicking()
    {
        if (!this.IsTimerTicking) this.IsTimerTicking = true;
    }

    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void DataGridToggleLiveSomePrices(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        if (this.LiveSomePricesDisabled) return;

        this.IsUpdatingAllPrices = false;
        this.IsUpdatingSomePrices = !this.IsUpdatingSomePrices;

        var liveSomeEditor = CodeGenHelper.FindByName<PropertyEditorPropertyDescription>("LiveSomePricesEditor");

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
