//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcComboComponent, IgcLinearProgressComponent } from 'igniteui-webcomponents';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridWithComboRendered {
    //begin eventHandler
    public countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
    ];
    public countries = [...this.worldCitiesAbove500K].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index); 
    public regions = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index);
    public cities = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index);
    public webGridWithComboRendered(args:any): void {
        const grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        grid.data = [
            {
              ID: 1,
              Country: '',
              Region: '',
              City: ''
            },
            {
              ID: 2,
              Country: '',
              Region: '',
              City: ''
            },
            {
              ID: 3,
              Country: '',
              Region: '',
              City: ''
            }
        ];
    }

    public onCountryChange(rowId: string, e: CustomEvent) {
        const newValue = e.detail.newValue[0];
        const regionComboId = "region_" + rowId;
        const cityComboId = "city_" + rowId;
        const regionCombo = document.getElementById(regionComboId) as IgcComboComponent<any>;
        const cityCombo = document.getElementById(cityComboId) as IgcComboComponent;

        if (!regionCombo || !cityCombo) return;

        if (newValue === undefined || newValue === '') {
            // Deselect, disable and clear region combo
            regionCombo.deselect(regionCombo.value);
            regionCombo.disabled = true;
            regionCombo.data = [];
    
            // Deselect, disable and clear city combo
            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            // Populate and enable region combo based on selected country
            regionCombo.disabled = false;
            regionCombo.data = this.regions.filter(region => region.Country === newValue);
    
            // Ensure city combo is reset when changing country
            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        }
    }

    public onRegionChange(rowId: string, e: CustomEvent) {
        const newValue = e.detail.newValue[0];
        const cityComboId = "city_" + rowId;
        const cityCombo = document.getElementById(cityComboId) as IgcComboComponent;
    
        if (!cityCombo) return;
    
        if (newValue === undefined || newValue === '') {
            // Deselect, disable and clear city combo
            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            // Populate and enable city combo based on selected country
            cityCombo.disabled = false;
            cityCombo.data = this.cities.filter(city => city.Region === newValue);
        }
    }
    //end eventHandler
}