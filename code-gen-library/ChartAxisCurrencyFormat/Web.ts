//begin imports
//end imports

export class ChartAxisCurrencyFormat
{
//begin eventHandler
    private _axisCurrencyFormat: Intl.NumberFormat = null;
    public chartAxisCurrencyFormat(item: any): string
    {
        if (this._axisCurrencyFormat == null) {
            this._axisCurrencyFormat = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            });
        }
        if (item == null) {
            return null;
        }
        return this._axisCurrencyFormat.format(item);
    }
//end eventHandler
}