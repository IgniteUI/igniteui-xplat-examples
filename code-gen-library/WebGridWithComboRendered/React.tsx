//begin imports
import { createRef, RefObject } from 'react';
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
    private combos: { [key: string]: RefObject<IgrCombo> } = {};
    private getComboRef(key: string): RefObject<IgrCombo> {
        if (!this.combos[key]) {
            this.combos[key] = createRef<IgrCombo>();
        }
        return this.combos[key];
    }

    public webGridWithComboRendered(args: IgrVoidEventArgs) {
        const grid = args.target as IgrGrid;
        grid.data = this.gridData;
    }

    public onCountryChange(rowId: string, event: CustomEvent) {
        // find next combo
        const regionCombo = this.getComboRef(`region_${rowId}`).current;
        const cityCombo = this.getComboRef(`city_${rowId}`).current;
        const regions = this.regions;
        const newValue = event.detail.newValue[0];
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

    public onRegionChange(rowId: string, event: CustomEvent<any>) {
        // find next combo
        const cityCombo = this.getComboRef(`city_${rowId}`).current;
        const cities = this.cities;
        const newValue = event.detail.newValue[0];
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