//begin imports
import { IgrCombo, IgrVoidEventArgs } from 'igniteui-react';
import { IgrGrid } from 'igniteui-react-grids';
//end imports


export class WebGridWithComboRendered {
    //begin eventHandler
    public gridData = [
        { ID: 1, Country: '', Region: '', City: '' },
        { ID: 2, Country: '', Region: '', City: '' },
        { ID: 3, Country: '', Region: '', City: '' }
    ];
    public countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
    ];
    public countries = [...CodeGenHelper.findByName<any[]>("worldCitiesAbove500K")].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index); 
    public regions = [...CodeGenHelper.findByName<any[]>("worldCitiesAbove500K")].filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index);
    public cities = [...CodeGenHelper.findByName<any[]>("worldCitiesAbove500K")].filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index);
    private comboRefCollection = new Array<IgrCombo>();
    private comboRefs(r: IgrCombo) {
        if (this && r && !this.comboRefCollection.includes(r)) {
            this.comboRefCollection.push(r);
        }
    }

    public webGridWithComboRendered(args:any): void {
        const grid = args.target as IgrGrid;
        grid.data = this.gridData;
    }

    public onCountryChange(rowId: string, args: CustomEvent<any>) {
        // find next combo
        const regionCombo = this.comboRefCollection.find(c => c.name === "region_" + rowId);
        const cityCombo = this.comboRefCollection.find(c => c.name === "city_" + rowId);
        const regions = this.regions;
        const newValue = args.detail.newValue[0];
        if (newValue === undefined) {
            regionCombo.deselect(regionCombo.value);
            regionCombo.disabled = true;
            regionCombo.data = [];

            cityCombo.deselect(regionCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            regionCombo.disabled = false;
            regionCombo.data = regions.filter(x => x.Country === newValue);

            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        }
    }

    public onRegionChange(rowId: string, args: CustomEvent<any>) {
        // find next combo
        const cityCombo = this.comboRefCollection.find(c => c.name === "city_" + rowId);
        const cities = this.cities;
        const newValue = args.detail.newValue[0];
        if (newValue === undefined) {
            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            cityCombo.disabled = false;
            cityCombo.data = cities.filter(x => x.Region === newValue);
        }
    }
    //end eventHandler
}