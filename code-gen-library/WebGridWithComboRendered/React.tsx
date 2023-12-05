//begin imports
import { IgrCombo } from 'igniteui-react';
//end imports


export class WebGridWithComboRendered {
    //begin eventHandler
    public webGridWithComboRendered(args: any) {
        console.log(args);
    }
    public countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
    ];
    public countries = [...this.worldCitiesAbove500K].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index);
    public regions = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index);
    public cities = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index);
    private comboRefCollection = new Map<string, IgrCombo>();
    private comboRefs(r: IgrCombo) {
        if (this && r && !this.comboRefCollection.get((r as any).props.name)) {
            this.comboRefCollection.set((r as any).props.name, r);
        }
    }


    public onCountryChange( rowId: string, cmp: any, args:any) {
        // find next combo
        // args incomplete, so gte value from component on timeout as workaround.
        const regionCombo = this.comboRefCollection.get("region_" + rowId);
        const cityCombo = this.comboRefCollection.get("city_" + rowId);
        const regions = this.regions;
       setTimeout(() => {
            const newValue = cmp.value[0];
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
       });
    }

    public onRegionChange( rowId: string, cmp: any, args:any) {
        // find next combo
        // args incomplete
        const cityCombo = this.comboRefCollection.get("city_" + rowId);
        const cities = this.cities;
       setTimeout(() => {
            const newValue = cmp.value[0];
            if (newValue === undefined) {
                cityCombo.deselect(cityCombo.value);
                cityCombo.disabled = true;
                cityCombo.data = [];
            } else {
                cityCombo.disabled = false;
                cityCombo.data = cities.filter(x => x.Region === newValue);
            }
       });
    }
    //end eventHandler
}